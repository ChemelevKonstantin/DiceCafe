class DiceCafeGame {
    constructor() {
        this.stats = {
            health: 2,
            luck: 2,
            gold: 1,
            maxValue: 5
        };
        
        this.diceSymbols = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
        
        this.gameState = {
            currentQuest: null,
            questsCompleted: 0,
            maxQuests: 4,
            isBossFight: false,
            currentRealm: 'Кав\'ярня ранкових метрвяків',
            diceValues: [0, 0, 0, 0],
            canReroll: true,
            canAddDie: true,
            fourthDieEnabled: false,
            isRolling: false,
            hasRolled: false,
            canConfirm: true,
            usedQuestIds: new Set() // Track used quest IDs
        };
        
        this.initializeElements();
        this.attachEventListeners();
        this.drawNewQuest();
        this.updateUI();
    }
    
    initializeElements() {
        // Stats elements
        this.healthBoxes = document.getElementById('healthBoxes');
        this.luckBoxes = document.getElementById('luckBoxes');
        this.goldBoxes = document.getElementById('goldBoxes');
        
        // Realm indicator
        this.realmIndicator = document.getElementById('realmIndicator');
        
        // Quest elements
        this.questTitle = document.getElementById('questTitle');
        this.questIllustration = document.getElementById('questIllustration');
        this.questText = document.getElementById('questText');
        this.successNumber = document.getElementById('successNumber');
        this.failureNumber = document.getElementById('failureNumber');
        this.successCondition = document.getElementById('successCondition');
        this.failureCondition = document.getElementById('failureCondition');
        this.specialCondition = document.getElementById('specialCondition');
        
        // Dice elements
        this.diceElements = Array.from({ length: 4 }, (_, i) => document.getElementById(`die${i + 1}`));
        this.diceTotal = document.getElementById('diceTotal');
        
        // Buttons
        this.rollButton = document.getElementById('rollButton');
        this.rerollButton = document.getElementById('rerollButton');
        this.addDieButton = document.getElementById('addDieButton');
        this.confirmButton = document.getElementById('confirmButton');
        this.restartButton = document.getElementById('restartButton');
        
        // Progress
        this.progressBar = document.getElementById('questProgress');
        
        // Popup
        this.resultPopup = document.getElementById('resultPopup');
        this.popupTitle = document.getElementById('popupTitle');
        this.popupEffects = document.getElementById('popupEffects');

        // End screen
        this.endScreen = document.getElementById('endScreen');
        this.restartEndButton = document.getElementById('restartEndButton');
    }
    
    attachEventListeners() {
        this.rollButton.addEventListener('click', () => this.rollDice());
        this.rerollButton.addEventListener('click', () => this.rerollDice());
        this.addDieButton.addEventListener('click', () => this.addFourthDie());
        this.confirmButton.addEventListener('click', () => this.confirmRoll());
        this.restartButton.addEventListener('click', () => this.resetGame());
        this.restartEndButton.addEventListener('click', () => this.resetGame());
    }
    
    updateUI() {
        // Update stats
        this.updateStatBoxes(this.healthBoxes, this.stats.health);
        this.updateStatBoxes(this.luckBoxes, this.stats.luck);
        this.updateStatBoxes(this.goldBoxes, this.stats.gold);
        
        // Update realm indicator
        this.realmIndicator.textContent = `Рівень: ${this.gameState.currentRealm.replace('realm', '')}`;
        
        // Update progress
        this.progressBar.style.width = `${(this.gameState.questsCompleted / this.gameState.maxQuests) * 100}%`;
        
        // Update buttons
        this.rerollButton.disabled = !(this.gameState.hasRolled && this.gameState.canReroll && this.stats.luck > 0);
        this.addDieButton.disabled = !this.gameState.canAddDie || this.stats.gold <= 0 || this.gameState.fourthDieEnabled;
        this.confirmButton.disabled = !this.gameState.diceValues.some(v => v !== 0);
        
        // Update dice total
        const activeDice = this.gameState.fourthDieEnabled ? 4 : 3;
        const total = this.gameState.diceValues.slice(0, activeDice).reduce((sum, val) => sum + val, 0);
        this.diceTotal.textContent = total;

        // Update dice total color based on conditions
        const totalElement = this.diceTotal;
        totalElement.classList.remove('success', 'failure');
        
        if (this.gameState.currentQuest && total > 0) {
            if (total >= this.gameState.currentQuest.conditions.success.threshold) {
                totalElement.classList.add('success');
            } else if (total <= this.gameState.currentQuest.conditions.failure.threshold) {
                totalElement.classList.add('failure');
            }
        }
        
        // Update dice faces
        for (let i = 0; i < 4; i++) {
            const die = this.diceElements[i];
            if (i < activeDice) {
                die.className = `die die${i+1}`;
                die.innerHTML = this.gameState.diceValues[i] ? this.renderDieFace(this.gameState.diceValues[i]) : '';
            } else {
                die.className = `die die${i+1} disabled`;
                die.innerHTML = '';
            }
        }
    }
    
    updateStatBoxes(container, value) {
        const boxes = container.children;
        Array.from(boxes).forEach((box, index) => {
            box.classList.toggle('filled', index < value);
        });
    }
    
    // Helper to render a die face as HTML pips
    renderDieFace(value) {
        // 3x3 grid positions: [0,0] [0,1] [0,2] ... [2,2]
        // For each die value, specify which positions have a pip
        const pipMap = [
            // 1: center
            [4],
            // 2: top-left, bottom-right
            [0, 8],
            // 3: top-left, center, bottom-right
            [0, 4, 8],
            // 4: top-left, top-right, bottom-left, bottom-right
            [0, 2, 6, 8],
            // 5: four corners + center
            [0, 2, 4, 6, 8],
            // 6: all but center
            [0, 2, 3, 5, 6, 8]
        ];
        const pips = Array.from({ length: 9 }, (_, i) =>
            pipMap[value - 1].includes(i)
                ? `<div class='pip' style='grid-area: ${Math.floor(i/3)+1} / ${(i%3)+1};'></div>`
                : "<div></div>"
        );
        return pips.join("");
    }
    
    async rollDice() {
        if (this.gameState.isRolling || this.gameState.hasRolled) return;
        this.gameState.isRolling = true;
        this.rollButton.disabled = true;
        this.gameState.hasRolled = true;
        const numDice = this.gameState.fourthDieEnabled ? 4 : 3;
        const rolls = Array.from({ length: numDice }, () => Math.floor(Math.random() * 6) + 1);
        // Animate dice rolling
        await Promise.all(
            this.diceElements.slice(0, numDice).map(async (die, index) => {
                die.className = `die die${index+1}`;
                die.innerHTML = '';
                die.classList.add('rolling');
                for (let i = 0; i < 10; i++) {
                    die.innerHTML = this.renderDieFace(Math.floor(Math.random() * 6) + 1);
                    await new Promise(resolve => setTimeout(resolve, 50));
                }
                die.innerHTML = this.renderDieFace(rolls[index]);
                die.classList.remove('rolling');
            })
        );
        this.gameState.diceValues = [...rolls, 0];
        this.gameState.isRolling = false;
        this.rollButton.disabled = true;
        this.updateUI();
    }
    
    async rerollAllDice() {
        if (this.gameState.isRolling) return;
        this.gameState.isRolling = true;
        const numDice = this.gameState.fourthDieEnabled ? 4 : 3;
        const rolls = Array.from({ length: numDice }, () => Math.floor(Math.random() * 6) + 1);
        await Promise.all(
            this.diceElements.slice(0, numDice).map(async (die, index) => {
                die.className = `die die${index+1}`;
                die.innerHTML = '';
                die.classList.add('rolling');
                for (let i = 0; i < 10; i++) {
                    die.innerHTML = this.renderDieFace(Math.floor(Math.random() * 6) + 1);
                    await new Promise(resolve => setTimeout(resolve, 50));
                }
                die.innerHTML = this.renderDieFace(rolls[index]);
                die.classList.remove('rolling');
            })
        );
        this.gameState.diceValues = [...rolls, 0];
        this.gameState.isRolling = false;
        this.updateUI();
    }
    
    async rerollDice() {
        if (this.stats.luck <= 0 || !this.gameState.canReroll) return;
        this.stats.luck--;
        this.gameState.canReroll = true;
        await this.rerollAllDice();
    }
    
    async addFourthDie() {
        if (this.stats.gold <= 0 || !this.gameState.canAddDie || this.gameState.fourthDieEnabled) return;
        
        this.stats.gold--;
        this.gameState.fourthDieEnabled = true;
        this.diceElements[3].classList.remove('disabled');
        this.gameState.canAddDie = false;

        // Roll the fourth die with animation
        const roll = Math.floor(Math.random() * 6) + 1;
        const die = this.diceElements[3];
        die.className = 'die die4';
        die.innerHTML = '';
        die.classList.add('rolling');
        for (let i = 0; i < 10; i++) {
            die.innerHTML = this.renderDieFace(Math.floor(Math.random() * 6) + 1);
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        die.innerHTML = this.renderDieFace(roll);
        die.classList.remove('rolling');
        this.gameState.diceValues[3] = roll;
        this.updateUI();
    }
    
    drawNewQuest() {
        if (this.gameState.questsCompleted >= this.gameState.maxQuests && !this.gameState.isBossFight) {
            // Draw a random boss card from current realm
            this.gameState.isBossFight = true;
            const currentRealmBosses = REALM_CARDS[this.gameState.currentRealm].bosses;
            this.gameState.currentQuest = currentRealmBosses[Math.floor(Math.random() * currentRealmBosses.length)];
        } else {
            const currentRealmQuests = REALM_CARDS[this.gameState.currentRealm].quests;
            
            // If all quests have been used, reset the used quests set
            if (this.gameState.usedQuestIds.size >= currentRealmQuests.length) {
                this.gameState.usedQuestIds.clear();
            }
            
            // Filter out used quests and get available ones
            const availableQuests = currentRealmQuests.filter(quest => 
                !this.gameState.usedQuestIds.has(quest.id)
            );
            
            // If no quests are available (shouldn't happen due to reset above), use all quests
            const questsToChooseFrom = availableQuests.length > 0 ? availableQuests : currentRealmQuests;
            
            // Select a random quest from available ones
            const selectedQuest = questsToChooseFrom[Math.floor(Math.random() * questsToChooseFrom.length)];
            
            // Mark the selected quest as used
            this.gameState.usedQuestIds.add(selectedQuest.id);
            this.gameState.currentQuest = selectedQuest;
        }
        
        // Update quest card UI
        this.questTitle.textContent = this.gameState.currentQuest.title;
        this.questIllustration.innerHTML = `<img src="${this.gameState.currentQuest.illustration}" alt="${this.gameState.currentQuest.title}">`;
        this.questText.textContent = this.gameState.currentQuest.text;
        this.successNumber.textContent = this.gameState.currentQuest.conditions.success.threshold;
        this.failureNumber.textContent = this.gameState.currentQuest.conditions.failure.threshold;
        this.successCondition.textContent = this.gameState.currentQuest.conditions.success.text;
        this.failureCondition.textContent = this.gameState.currentQuest.conditions.failure.text;
        this.specialCondition.textContent = this.gameState.currentQuest.conditions.special.text;
    }
    
    resetTurn() {
        this.gameState.diceValues = [0, 0, 0, 0];
        this.gameState.canReroll = true;
        this.gameState.canAddDie = true;
        this.gameState.fourthDieEnabled = false;
        this.gameState.hasRolled = false;
        this.diceElements[3].classList.add('disabled');
        this.diceElements.forEach(die => die.textContent = '⚀');
        this.rollButton.disabled = false;
        this.updateUI();
    }
    
    showResultPopup(title, effects) {
        this.popupTitle.textContent = title;
        this.popupEffects.innerHTML = effects.map(effect => `<p>${effect}</p>`).join('');
        this.resultPopup.classList.add('show');
        
        // Disable confirm button while popup is showing
        this.confirmButton.disabled = true;
        
        // Automatically close popup after 2 seconds
        setTimeout(() => {
            this.resultPopup.classList.remove('show');
            // Re-enable confirm button after popup is closed
            this.confirmButton.disabled = false;
        }, 2000);
    }
    
    confirmRoll() {
        // Prevent multiple confirmations
        if (!this.gameState.canConfirm) return;
        this.gameState.canConfirm = false;
        
        // Disable confirm button immediately
        this.confirmButton.disabled = true;
        
        const activeDice = this.gameState.fourthDieEnabled ? 4 : 3;
        const diceRoll = this.gameState.diceValues.slice(0, activeDice);
        const total = diceRoll.reduce((sum, val) => sum + val, 0);
        
        const effects = [];
        const { currentQuest } = this.gameState;
        
        // Check conditions
        if (total >= currentQuest.conditions.success.threshold) {
            currentQuest.conditions.success.effects.forEach(effect => {
                this.stats[effect.type] = Math.min(this.stats[effect.type] + effect.value, this.stats.maxValue);
                effects.push(`Success! ${effect.text}`);
            });
        } else if (total <= currentQuest.conditions.failure.threshold) {
            currentQuest.conditions.failure.effects.forEach(effect => {
                this.stats[effect.type] = Math.max(0, this.stats[effect.type] + effect.value);
                effects.push(`Failure! ${effect.text}`);
            });
        }
        
        // Check special condition
        const special = currentQuest.conditions.special;
        if (conditionCheckers[special.condition](diceRoll, special.value)) {
            special.effects.forEach(effect => {
                this.stats[effect.type] = Math.min(this.stats[effect.type] + effect.value, this.stats.maxValue);
                effects.push(`Special! ${effect.text}`);
            });
        }
        
        this.showResultPopup(
            effects.some(e => e.startsWith('Success')) ? 'Success!' : 
            effects.some(e => e.startsWith('Failure')) ? 'Failure!' : 
            'Quest Complete',
            effects
        );
        
        if (!this.gameState.isBossFight) {
            this.gameState.questsCompleted++;
        }
        
        // Check game over conditions
        if (this.stats.health <= 0) {
            setTimeout(() => {
                this.showResultPopup('Гру провалено!', ['Ти ще Чайник у цьому!']);
                setTimeout(() => {
                    this.resetGame();
                }, 5000);
            }, 5000);
            return;
        }
        
        if (this.gameState.isBossFight) {
            const currentRealm = this.gameState.currentRealm;
            const nextRealm = this.getNextRealm(currentRealm);
            
            if (nextRealm) {
                setTimeout(() => {
                    this.showResultPopup('Перемога!', [
                        `Ти переміг ${currentQuest.title}!`,
                        `Подорож продовжується в ${nextRealm.replace('realm', 'Realm ')}!`
                    ]);
                    this.gameState.currentRealm = nextRealm;
                    this.gameState.questsCompleted = 0;
                    this.gameState.isBossFight = false;
                    setTimeout(() => {
                        this.drawNewQuest();
                        this.resetTurn();
                        // Re-enable confirmation after all animations are done
                        setTimeout(() => {
                            this.gameState.canConfirm = true;
                        }, 4000);
                    }, 4000);
                }, 4000);
            } else {
                setTimeout(() => {
                    this.showResultPopup('Це перемога!', [
                        `╭∩╮( •̀_•́ )╭∩╮ ${currentQuest.title}!`,
                        'Іди посьорбай кави'
                    ]);
                    setTimeout(() => {
                        this.resetGame();
                    }, 2000);
                }, 2000);
            }
            return;
        }
        
        // Prepare for next quest
        setTimeout(() => {
            this.drawNewQuest();
            this.resetTurn();
            // Re-enable confirmation after all animations are done
            setTimeout(() => {
                this.gameState.canConfirm = true;
            }, 2000);
        }, 2000);
    }
    
    getNextRealm(currentRealm) {
        const realms = Object.keys(REALM_CARDS);
        const currentIndex = realms.indexOf(currentRealm);
        const nextRealm = realms[currentIndex + 1];
        
        if (!nextRealm) {
            // This was the last realm, show end screen
            setTimeout(() => {
                this.showEndScreen();
            }, 2000);
            return null;
        }
        
        return nextRealm;
    }
    
    resetGame() {
        // Hide end screen if it's showing
        this.endScreen.classList.remove('show');
        
        this.stats = {
            health: 2,
            luck: 2,
            gold: 1,
            maxValue: 5
        };
        
        this.gameState = {
            currentQuest: null,
            questsCompleted: 0,
            maxQuests: 4,
            isBossFight: false,
            currentRealm: 'Кав\'ярня ранкових метрвяків',
            diceValues: [0, 0, 0, 0],
            canReroll: true,
            canAddDie: true,
            fourthDieEnabled: false,
            isRolling: false,
            hasRolled: false,
            canConfirm: true,
            usedQuestIds: new Set()
        };
        
        this.drawNewQuest();
        this.resetTurn();
    }

    showEndScreen() {
        // Disable all game controls
        this.rollButton.disabled = true;
        this.rerollButton.disabled = true;
        this.addDieButton.disabled = true;
        this.confirmButton.disabled = true;
        this.restartButton.disabled = true;
        
        // Show the end screen
        this.endScreen.classList.add('show');
        
        // Reset game state for next playthrough
        this.gameState = {
            currentQuest: null,
            questsCompleted: 0,
            maxQuests: 4,
            isBossFight: false,
            currentRealm: 'Кав\'ярня ранкових метрвяків',
            diceValues: [0, 0, 0, 0],
            canReroll: true,
            canAddDie: true,
            fourthDieEnabled: false,
            isRolling: false,
            hasRolled: false,
            canConfirm: true,
            usedQuestIds: new Set()
        };
    }
}

// Start the game when the page loads
window.addEventListener('DOMContentLoaded', () => {
    new DiceCafeGame();
}); 
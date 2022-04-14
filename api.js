import LEVELS from './levels.js'

const ANSWER_TYPES = [
    "regex",
    "text",
]

class RegexChallengeAPI {
    /**
     * If the code corresponds to an existing level then that level is returned.
     * If the code does not match any level, the first level is returned.
     * @param {string} code 
     * @returns {object}
     */
    getLevel(code) {
        return LEVELS.find(lvl => lvl.levelCode === code) ?? LEVELS.at(0)
    }

    /**
     * 
     * @param {object} answer {levelCode: string, type: string, content: object}
     * @returns {string}
     */
    checkAnswer(answer) {
        const validation = this.#validateData(answer)
        if (validation.validated === false)
            return {
                status: "error", 
                levelCode: answer.levelCode, 
                description: validation.description
            }

        const correctness = this.#validateCorrectness(answer)
        if (correctness.correct === false) {
            return {
                status: "fail",
                levelCode: answer.levelCode,
                description: correctness.description
            }
        } 

        const indexOfThisLevel = LEVELS.findIndex(lvl => lvl.levelCode === answer.levelCode)
        const nextLevel = LEVELS[indexOfThisLevel + 1]
        return {
            status: "success",
            levelCode: nextLevel.levelCode,
            description: null
        }
    }

    /**
     * return an object {
     *  correct: boolean - correct answer: yes/no
     *  description: string - if possible an explanation of why it's not correct, or a hint.
     * }
     * @param {*} answer 
     */
    #validateCorrectness(answer) {
        let correctness = { correct: false }

        const currentLevel = this.getLevel(answer.levelCode)

        if (answer.type === "text") {
            correctness.correct = answer.text === currentLevel.answer.correct
            correctness.description = currentLevel.answer.description
        }

        return correctness
    }

    /**
     * Return a validation object { 
     *  validated: boolean - validated yes/no.
     *  description: string - describing why it did not validate.
     * }
     */
    #validateData(answer) {
        let validation = { validated: true }

        if (!LEVELS.find(lvl => lvl.levelCode === answer.levelCode)) {
            validation.description = "levelCode not valid"
            validation.validated = false
        }

        if (!answer.type in ANSWER_TYPES) {
            validation.description = "not a supported answer type"
            validation.validated = false
        }

        return validation
    }
}

export default new RegexChallengeAPI();
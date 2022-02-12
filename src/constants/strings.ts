export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Bien!', 'Excelente!', 'Perfecto!']
export const GAME_COPIED_MESSAGE = 'Juego copiado al portapapeles'
export const ABOUT_GAME_MESSAGE = 'Sobre este juego'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Letras insuficientes'
export const WORD_NOT_FOUND_MESSAGE = 'La palabra no existe'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const ENTER_TEXT = 'Enviar'
export const DELETE_TEXT = 'Borrar'
export const STATISTICS_TITLE = 'Estadisticas'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'Nueva palabra en'
export const SHARE_TEXT = 'Compartir'
export const TOTAL_TRIES_TEXT = 'Total de intentos'
export const SUCCESS_RATE_TEXT = 'Ratio de exito'
export const CURRENT_STREAK_TEXT = 'Racha actual'
export const BEST_STREAK_TEXT = 'Mejor racha'

export interface Board {
    board: (string | null)[],
    handleSquareSetting: (index: number) => void
}
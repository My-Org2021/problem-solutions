package main

import "fmt"

func main() {
	matrix := [][]int{{5, 1, 9, 11}, {2, 4, 8, 10}, {13, 3, 6, 7}, {15, 14, 12, 16}}

	res := rotate(matrix)
	fmt.Println(res)
}

func rotate(matrix [][]int) [][]int {
	rotatedMatrix := make([][]int, len(matrix))

	for i := 0; i < len(matrix); i++ {

		for j := len(matrix) - 1; j >= 0; j-- {
			rotatedMatrix[i] = append(rotatedMatrix[i], matrix[j][i])
		}
	}

	return rotatedMatrix
}

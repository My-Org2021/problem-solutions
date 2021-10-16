package main

import "fmt"

func main() {
	numRows := 6

	res := generate(numRows)
	fmt.Println(res)
}

// Main function that generates pascal's triangle from given [numRows].
func generate(numRows int) [][]int {
	triangle := make([][]int, numRows)

	if numRows == 0 {
		return [][]int{{}}
	}

	for i := 0; i < numRows; i++ {
		// Make triangle's zero index value just [1]
		if i == 0 {
			triangle[0] = append(triangle[0], 1)
			continue
		}

		// Generate new triangle row from old triangle row.
		triangle[i] = generateFromOld(triangle[i-1])
	}

	return triangle
}

func generateFromOld(arr []int) []int {
	newArr := make([]int, len(arr)+1)

	// If given arr is just [1] then it have to be [1, 1];
	if len(arr) == 1 && arr[0] == 1 {
		return []int{1, 1}
	}

	for i := 0; i < len(newArr); i++ {
		// First and last items always have to be one.
		if i == 0 || i == len(newArr)-1 {
			newArr[i] = 1
			continue
		}

		newArr[i] = arr[i-1] + arr[i]
	}

	return newArr
}

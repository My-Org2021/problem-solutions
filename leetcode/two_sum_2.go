package main

import (
	"fmt"
)

func main() {
	numbers := []int{-1, 0} 
	target := -1

	res := twoSum(numbers, target)
	fmt.Println(res)
}

func twoSum(numbers []int, target int) []int {
	for i := 0; i < len(numbers); i++ {
		for j := 1; j < len(numbers); j++ {
			if (numbers[i]+numbers[j]) == target && i != j {
				return []int{i + 1, j + 1}
			}
		}
	}

	return []int{}
}

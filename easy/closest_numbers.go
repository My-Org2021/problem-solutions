// https://www.hackerrank.com/challenges/closest-numbers/problem

package main

import (
	"fmt"
	"math"
	"sort"
)

func main() {
	arr := []int32{-5, 15, 25, 71, 63}

	result := closestNumbers(arr)
	fmt.Println(result)
}

func closestNumbers(arr []int32) []int32 {
	array := convertToInt(arr)
	sort.Ints(array)
	var result []int

	min := array[len(array)-1]
	fmt.Println(min)

	for i := 0; i < len(array)-1; i++ {
		values := []int{array[i], array[i+1]}
		res := int(math.Abs(float64(values[0]) - float64(values[1])))

		if res == min {
			result = append(result, values...)
		}
		if res < min {
			result = []int{}
			result = append(result, values...);
			min = res;
		}
	}

	return convertToInt32(result)
}

// Basicaly it converts array's values --> int32 to int 
func convertToInt(list []int32) []int {
	result := []int{}

	for i := 0; i < len(list); i++ {
		result = append(result, int(list[i]))
	}

	return result
}

// Basicaly it converts array's values --> int to int32 
func convertToInt32(list []int) []int32 {
	result := []int32{}

	for i := 0; i < len(list); i++ {
		result = append(result, int32(list[i]))
	}

	return result
}

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

func closestNumbers(array []int32) []int32 {
	sort.Slice(array, func(i, j int) bool { return array[i] < array[j] })
	var result []int32

	min := array[len(array)-1]

	for i := 0; i < len(array)-1; i++ {
		values := []int32{array[i], array[i+1]}
		res := int32(math.Abs(float64(values[0]) - float64(values[1])))

		if res == min {
			result = append(result, values...)
		}
		if res < min {
			result = []int32{}
			result = append(result, values...)
			min = res
		}
	}

	return result
}

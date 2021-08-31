// https://www.hackerrank.com/challenges/maximum-perimeter-triangle/problem

package main

import (
	"fmt"
	"sort"
)

func main() {
	arr := []int32{1, 1, 1, 2, 3, 5}
	result := maximumPerimeterTriangle(arr)
	fmt.Println(result)
}

func maximumPerimeterTriangle(sticks []int32) []int32 {
	sort.Slice(sticks, func(i, j int) bool { return sticks[i] < sticks[j] })
	result := []int32{-1}

	for i := len(sticks) - 1; i > 1; i-- {
		var a, b, c = sticks[i], sticks[i-1], sticks[i-2]

		if a < b+c {
			result = []int32{}
			result = append(result, []int32{c, b, a}...)
			break
		}

	}

	return result
}
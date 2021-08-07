// https://www.hackerrank.com/challenges/fair-rations/problem

package main

import (
	"fmt"
	"strconv"
)

func main() {
	B := []int32{2, 3, 4, 5, 6}
	result := fairRations(B)
	fmt.Println(result)
}

func isOddNum(val int32) bool {
	return val%2 == 1
}

func fairRations(B []int32) string {
	result := 0

	for i := 0; i < len(B)-1; i++ {
		if isOddNum(B[i]) {
			B[i]++
			B[i+1]++
			result += 2
		}
		

		if isOddNum(B[len(B)-1]) && len(B)-2 == i {
			return "NO"
		}
	}

	return strconv.Itoa(result)
}

// https://www.hackerrank.com/challenges/best-divisor
package main

import "fmt"

// Cannot pass all test cases :(

func main() {
	n := int32(2)

	if n%2 != 0 {
		fmt.Println(n)
		return
	}

	var bestOne int32

	for i := int32(1); i < n-1; i++ {
		isEven := (n/i)%2 == 0
		if isEven && bestOne < i {
			bestOne = i
		}
	}
	if bestOne == 0 {
		bestOne = n
	}

	fmt.Println(bestOne)
}

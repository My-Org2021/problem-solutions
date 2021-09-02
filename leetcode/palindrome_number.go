package main

import (
	"fmt"
	"strconv"
)

func main() {
	x := 121
	res := isPalindrome(x)

	fmt.Println(res)
}

func isPalindrome(x int) bool {
	xx := strconv.Itoa(x)
	reversedX := ""
	for i := len(xx) - 1; i >= 0; i-- {
		reversedX += string(xx[i])
	}
	return xx == reversedX
}

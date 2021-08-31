// https://www.hackerrank.com/challenges/game-of-stones-1/problem

package main

import "fmt"

func main() {
	n := int32(7)
	res := gameOfStones(n)
	fmt.Println(res)
}

func gameOfStones(n int32) string {
	if n >= n%7 {
		return "Second"
	}
	return "First"
}

// https://www.hackerrank.com/challenges/game-with-cells/problem

package main

import "fmt"

func gameWithCells(n int32, m int32) int32 {
	return (n + n%2) * (m + m%2) / 4
}

func main() {
	var n, m int32 = 2, 3
	res := gameWithCells(n, m)
	fmt.Println(res)
}

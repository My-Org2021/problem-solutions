// https://www.hackerrank.com/challenges/p1-paper-cutting/problem

package main

import "fmt"

func main() {
	var n, m int32 = 12, 12
	res := solve(n, m)
	fmt.Println(res)
}

// Need to use math/big
func solve(n int32, m int32) int64 {
	return int64((m*n) - 1);
}

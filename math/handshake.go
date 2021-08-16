// https://www.hackerrank.com/challenges/handshake/problem

package main

import "fmt"

func handshake(n int32) int32 {
	var res int32 = 0
	time := n - 1

	for time > 0 {
		res += time
		time--
	}

	return res
}

func main() {
	var n int32 = 4
	res := handshake(n)

	fmt.Println(res)
}

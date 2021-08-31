// https://www.hackerrank.com/challenges/find-point/problem

package main

import "fmt"

func main() {
	var px, py, qx, qy int32 = 0, 0, 1, 1
	res := findPoint(px, py, qx, qy)

	fmt.Println(res)
}

func findPoint(px int32, py int32, qx int32, qy int32) []int32 {
	var rx, ry = (qx - px) + qx, (qy - py) + qy
	return []int32{rx, ry}
}

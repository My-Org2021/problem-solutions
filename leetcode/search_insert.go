package main

import "fmt"

func main() {
	nums := []int{1,3,5,6}
	target := 5

	res := searchInsert(nums, target)
	fmt.Println(res)
}

func searchInsert(nums []int, target int) int {
	for i := 0; i < len(nums); i++ {
		if nums[i] >= target {
			return i
		}
	}
	return len(nums)
}

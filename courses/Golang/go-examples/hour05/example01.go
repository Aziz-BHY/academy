package main

import "fmt"

func main() {
	x := 11
	for i := x - 1; i > 1; i-- {
		if x%i == 0 {
			fmt.Println("%v is not prime, it is also divisible by %v", x, i)
			break
		} else if i == 1 {
			fmt.Println("%v is prime!", x)
		}
	}
}

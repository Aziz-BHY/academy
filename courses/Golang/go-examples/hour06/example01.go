package main

import "fmt"

func main() {

	nativApps := []string{"app", "app", "app", "Accounting App,", "Value Exchange App,", "CMS,", "Guinean Tic Tac Toe,", "Cross Words,", "Video Streaming App"}
	fmt.Println(nativApps, "length is ", len(nativApps))

	//s := nativApps[3:7]
	//fmt.Println(s, "length = ", len(s), "capacity =", cap(s))

	devs := map[string]int{
		"app":                 25,
		"Value Exchange App":  126,
		"Guinean Tic Tac Toe": 52,
		"CMS":                 89,
	}
	fmt.Println(devs)
	delete(devs, "app")
	fmt.Println(devs)
	_, b := devs["app,"]
	if !b {
		fmt.Println("Didin't find 'app' but it's there twice! look:\n")
		for Dev, App := range devs {
			fmt.Println(Dev, App)
		}
	}
	/*
		s = append(s, "erased xwords here!", "erased VidStreaming here!", "out of capacity")

		fmt.Println(s, "length = ", len(s), "capacity =", cap(s))

		fmt.Println(nativApps, "length is ", len(nativApps), "capacity =", cap(nativApps))*/
}

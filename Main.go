package main

import (
	"fmt"
	"io/fs"
	"io/ioutil"
	"os"
	"os/exec"
	"strings"
)

func init() {
	current = "."
	homeDir, _ = os.UserHomeDir()
	archive = homeDir + "\\.spicetify"
	bin = homeDir + "\\Spicetify"
	binGallery = bin + "\\Gallery"
}

func main() {

	if !CheckInstalled() {
		InstallSpicetify()
		MoveThemes()
		CreateBinary()
	}
	Start()
}

func RunCommand(command string) {

	shell := "powershell "

	shell += command

	args := strings.Split(shell, " ")

	cmd := exec.Command(args[0], args[1:]...)

	err := cmd.Run()
	if err != nil {
		fmt.Println("Failed to run Command")
	}
}

func getFiles(src string) []fs.FileInfo {

	fds, _ := ioutil.ReadDir(src)

	return fds
}

func getImages() []string {

	imageFiles := getFiles(binGallery)

	images := []string{}

	for _, v := range imageFiles {
		images = append(images, "\\"+v.Name())
	}
	return images
}

func getImageNames() []string {

	imageNames := []string{}

	for _, v := range getImages() {
		noPrefix := strings.ReplaceAll(v, "\\", "")
		noEnd := strings.Split(noPrefix, ".")[0]
		imageNames = append(imageNames, noEnd)
	}
	return imageNames
}

func ChangeTheme(i int) {

	name := getImageNames()[i]
	args := strings.Split(name, " - ")

	cmd := "spicetify restore; "

	if args[0] == "Dribbblish" {
		CopyFile(archive+"\\Themes\\Dribbblish\\dribbblish.js", archive+"\\Extensions\\dribbblish.js", archive+"\\Extensions")
		cmd += "spicetify config extensions dribbblish.js; "
	} else {
		os.Remove(archive + "\\Extensions\\dribbblish.js")
		cmd += "spicetify config extensions dribbblish.js-; "
	}

	cmd += "spicetify config current_theme " + args[0] + "; "
	cmd += "spicetify config color_scheme " + args[1] + "; "
	cmd += "spicetify apply"

	RunCommand(cmd)
}

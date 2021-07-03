package main

import (
	"io"
	"io/ioutil"
	"os"
	"path"
)

var current string
var bin string
var homeDir string
var archive string

func CheckInstalled() bool {

	if _, err := os.Stat(archive); err == nil {
		return true
	}
	return false
}

func InstallSpicetify() {

	l1 := "Add-Type -AssemblyName PresentationFramework"
	l2 := "Invoke-WebRequest -UseBasicParsing \"https://raw.githubusercontent.com/khanhas/spicetify-cli/master/install.ps1\" | Invoke-Expression"
	l3 := "spicetify"
	l4 := "spicetify backup apply enable-devtool"
	l5 := "spicetify config inject_css 1 replace_colors 1 overwrite_assets 1"
	l6 := "spicetify apply"

	cmd := []string{l1, l2, l3, l4, l5, l6}
	for _, v := range cmd {
		RunCommand(v)
	}
}

func MoveThemes() {

	src := current + "\\Themes"
	dst := archive + "\\Themes"

	CopyDir(src, dst)
}

func CreateBinary() {

	src := current + "\\Gallery"
	dst := bin + "\\Gallery"
	exe := "\\SpicetifyV2.exe"

	os.Mkdir(bin, 0777)
	os.Mkdir(dst, 0777)

	CopyDir(src, dst)
	CopyFile(current+exe, bin+exe, bin)
}

// CopyDir copies a whole directory recursively and its sub-directories.
func CopyDir(src, dst string) {
	var srcinfo os.FileInfo

	srcinfo, _ = os.Stat(src)

	_ = os.MkdirAll(dst, srcinfo.Mode())

	fds, _ := ioutil.ReadDir(src)

	for _, fd := range fds {
		srcfp := path.Join(src, fd.Name())
		dstfp := path.Join(dst, fd.Name())

		if fd.IsDir() {
			CopyDir(srcfp, dstfp)
		} else {
			CopyFile(srcfp, dstfp, dst)
		}
	}
}

// CopyFile copy a single file from the source to the destination.
func CopyFile(src, dst, bareDst string) {
	var srcfd *os.File
	var dstfd *os.File

	srcfd, _ = os.Open(src)
	defer srcfd.Close()

	os.MkdirAll(bareDst, os.ModePerm) // Create the bareDst folder if not exist
	dstfd, _ = os.Create(dst)
	defer dstfd.Close()

	io.Copy(dstfd, srcfd)
	os.Stat(src)
}

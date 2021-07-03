package main

import (
	"io"
	"os"
	"path"
)

var current string
var homeDir string
var archive string
var bin string
var binGallery string

func CheckInstalled() bool {

	if _, err := os.Stat(archive); err == nil {
		return true
	}
	return false
}

func InstallSpicetify() {

	cmd := "Add-Type -AssemblyName PresentationFramework; "
	cmd += "Invoke-WebRequest -UseBasicParsing \"https://raw.githubusercontent.com/khanhas/spicetify-cli/master/install.ps1\" | Invoke-Expression; "
	cmd += "spicetify; "
	cmd += "spicetify backup apply enable-devtool; "
	cmd += "spicetify config inject_css 1 replace_colors 1 overwrite_assets 1; "
	cmd += "spicetify apply"

	RunCommand(cmd)
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

	CopyDir(src, dst)
	CopyFile(current+exe, bin+exe, bin)
}

// CopyDir copies a whole directory recursively and its sub-directories.
func CopyDir(src, dst string) {

	srcinfo, _ := os.Stat(src)

	os.MkdirAll(dst, srcinfo.Mode())

	for _, fd := range getFiles(src) {
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

	srcfd, _ := os.Open(src)
	defer srcfd.Close()

	os.MkdirAll(bareDst, os.ModePerm) // Create the bareDst folder if not exist
	dstfd, _ := os.Create(dst)
	defer dstfd.Close()

	io.Copy(dstfd, srcfd)
	os.Stat(src)
}

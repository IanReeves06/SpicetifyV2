package main

import (
	"io"
	"os"
	"path"
)

var current string
var homeDir string
var bin string
var gallery string

func CheckInstalled() bool {

	if _, err := os.Stat(bin); err == nil {
		return true
	}
	return false
}

func InstallSpicetify() {

	desktop := homeDir + "\\Desktop"
	binBin := current + "\\bin\\.spicetify"
	binCli := current + "\\bin\\spicetify-cli"
	exe := "\\SpicetifyV2.exe"

	CopyDir(binBin, bin)
	CopyDir(binCli, homeDir+"\\spicetify-cli")

	CopyFile(binBin+exe, desktop+exe, desktop)
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

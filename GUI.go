package main

import (
	"fmt"
	"strings"

	"fyne.io/fyne"
	"fyne.io/fyne/app"
	"fyne.io/fyne/canvas"
	"fyne.io/fyne/container"
	"fyne.io/fyne/layout"
	"fyne.io/fyne/theme"
	"fyne.io/fyne/widget"
)

var w fyne.Window
var image *canvas.Image
var page string

func StartGUI() {

	a := app.New()
	w = a.NewWindow("Theme Select")

	getFirst()

	a.Settings().SetTheme(theme.DarkTheme())
	w.Resize(fyne.NewSize(1600, 800))
	w.ShowAndRun()
}

func getFirst() {

	page = "first"
	image = canvas.NewImageFromFile(bin + "\\Gallery\\Adapta-Nokto.png")

	w.SetContent(loadUI(image, page))
}

func getSecond() {

	page = "second"
	image = canvas.NewImageFromFile(bin + "\\Gallery\\Elementary.png")

	w.SetContent(loadUI(image, page))
}

func getThird() {

	page = "third"
	image = canvas.NewImageFromFile(bin + "\\Gallery\\Phosphoria.png")

	w.SetContent(loadUI(image, page))
}

func getDrib() {

	page = "drib"
	image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - base.png")

	w.SetContent(loadUI(image, page))
}

func confirmButton() {

	imageSlice := strings.Split(image.File, "\\")
	lastSliceIndex := imageSlice[len(imageSlice)-1]
	themeSlice := strings.Split(lastSliceIndex, ".")
	theme := themeSlice[0]

	fmt.Println(theme)

	ChangeTheme(theme)

}

func backButton() {
	switch page {
	case "first":
		break
	case "second":
		getFirst()
	case "third":
		getSecond()
	case "drib":
		getFirst()
	}
}

func forwardButton() {
	switch page {
	case "first":
		getSecond()
	case "second":
		getThird()
	case "third":
		break
	case "drib":
		break
	}
}

func loadBars() (*widget.Toolbar, *widget.Toolbar) {

	bar := widget.NewToolbar(
		widget.NewToolbarAction(theme.NavigateBackIcon(), func() { backButton() }),
		widget.NewToolbarSpacer(),
		widget.NewToolbarAction(theme.NavigateNextIcon(), func() { forwardButton() }),
	)

	confirm := widget.NewToolbar(
		widget.NewToolbarSpacer(),
		widget.NewToolbarAction(theme.CheckButtonIcon(), func() { confirmButton() }),
		widget.NewToolbarSpacer(),
	)
	return bar, confirm
}

func loadUI(pic *canvas.Image, page string) fyne.CanvasObject {

	bar, confirm := loadBars()

	var entries *widget.Box

	switch page {
	case "first":
		entries = loadPageOne()
	case "second":
		entries = loadPageTwo()
	case "third":
		entries = loadPageThree()
	case "drib":
		entries = loadPageDrib()
	}

	list := fyne.NewContainerWithLayout(layout.NewBorderLayout(bar, confirm, nil, nil),
		entries, bar, confirm)

	ui := container.NewHSplit(list, pic)
	ui.Offset = 0.15

	return ui
}

// func loadUI(pic *canvas.Image, page string) fyne.CanvasObject {

// 	list := getList(page)

// 	ui := container.NewHSplit(list, pic)
// 	ui.Offset = 0.15

// 	return ui
// }

func loadPageOne() *widget.Box {

	b1 := widget.NewButton("Adapta-Nokto", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Adapta-Nokto.png")
		w.SetContent(loadUI(image, page))
	})
	b2 := widget.NewButton("Arc-Dark", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Arc-Dark.png")
		w.SetContent(loadUI(image, page))
	})
	b3 := widget.NewButton("Arc-Green", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Arc-Green.png")
		w.SetContent(loadUI(image, page))
	})
	b4 := widget.NewButton("Aritim-Dark", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Aritim-Dark.png")
		w.SetContent(loadUI(image, page))
	})
	b5 := widget.NewButton("Bittersweet", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Bittersweet.png")
		w.SetContent(loadUI(image, page))
	})
	b6 := widget.NewButton("Black", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Black.png")
		w.SetContent(loadUI(image, page))
	})
	b7 := widget.NewButton("Bloody", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Bloody.jpg")
		w.SetContent(loadUI(image, page))
	})
	b8 := widget.NewButton("Blueballs", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Blueballs.png")
		w.SetContent(loadUI(image, page))
	})
	b9 := widget.NewButton("BreezeLight", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\BreezeLight.png")
		w.SetContent(loadUI(image, page))
	})
	b10 := widget.NewButton("BurntSienna", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\BurntSienna.png")
		w.SetContent(loadUI(image, page))
	})
	b11 := widget.NewButton("Challenger-Deep", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Challenger-Deep.png")
		w.SetContent(loadUI(image, page))
	})
	b12 := widget.NewButton("CherryBlossom - default", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\CherryBlossom - default.png")
		w.SetContent(loadUI(image, page))
	})
	b13 := widget.NewButton("CherryBlossom - coral", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\CherryBlossom - coral.png")
		w.SetContent(loadUI(image, page))
	})
	b14 := widget.NewButton("DanDrumStone", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\DanDrumStone.png")
		w.SetContent(loadUI(image, page))
	})
	b15 := widget.NewButton("DanDrumStoneNew", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\DanDrumStoneNew.png")
		w.SetContent(loadUI(image, page))
	})
	b16 := widget.NewButton("Dark", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dark.png")
		w.SetContent(loadUI(image, page))
	})
	b17 := widget.NewButton("DeepCoral", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\DeepCoral.png")
		w.SetContent(loadUI(image, page))
	})
	b18 := widget.NewButton("Dobbo", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dobbo.png")
		w.SetContent(loadUI(image, page))
	})
	b19 := widget.NewButton("Dracula", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dracula.png")
		w.SetContent(loadUI(image, page))
	})
	b20 := widget.NewButton("Dribbblish", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - base.png")
		w.SetContent(loadUI(image, page))
	})

	buttons := widget.NewVBox(
		b1,
		b2,
		b3,
		b4,
		b5,
		b6,
		b7,
		b8,
		b9,
		b10,
		b11,
		b12,
		b13,
		b14,
		b15,
		b16,
		b17,
		b18,
		b19,
		b20,
	)
	return buttons
}

func loadPageTwo() *widget.Box {

	b1 := widget.NewButton("Elementary", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Elementary.png")
		w.SetContent(loadUI(image, page))
	})
	b2 := widget.NewButton("Flatten", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Flatten.png")
		w.SetContent(loadUI(image, page))
	})
	b3 := widget.NewButton("Gradianto", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Gradianto.png")
		w.SetContent(loadUI(image, page))
	})
	b4 := widget.NewButton("Gruvbox-Gold", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Gruvbox-Gold.png")
		w.SetContent(loadUI(image, page))
	})
	b5 := widget.NewButton("Honne", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Honne.png")
		w.SetContent(loadUI(image, page))
	})
	b6 := widget.NewButton("JarvisBot", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\JarvisBot.png")
		w.SetContent(loadUI(image, page))
	})
	b7 := widget.NewButton("Kaapi - gruvbox", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Kaapi - gruvbox.png")
		w.SetContent(loadUI(image, page))
	})
	b8 := widget.NewButton("Kaapi - home", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Kaapi - home.png")
		w.SetContent(loadUI(image, page))
	})
	b9 := widget.NewButton("Lovelace", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Lovelace.png")
		w.SetContent(loadUI(image, page))
	})
	b10 := widget.NewButton("Material-Ocean", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Material-Ocean.png")
		w.SetContent(loadUI(image, page))
	})
	b11 := widget.NewButton("Midnight-Light", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Midnight-Light.png")
		w.SetContent(loadUI(image, page))
	})
	b12 := widget.NewButton("MoonChild", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\MoonChild.jpg")
		w.SetContent(loadUI(image, page))
	})
	b13 := widget.NewButton("Night", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Night.png")
		w.SetContent(loadUI(image, page))
	})
	b14 := widget.NewButton("NightMoon", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\NightMoon.png")
		w.SetContent(loadUI(image, page))
	})
	b15 := widget.NewButton("Night-Owl", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Night-Owl.png")
		w.SetContent(loadUI(image, page))
	})
	b16 := widget.NewButton("Nord", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Nord.png")
		w.SetContent(loadUI(image, page))
	})
	b17 := widget.NewButton("NoSleep", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\NoSleep.png")
		w.SetContent(loadUI(image, page))
	})
	b18 := widget.NewButton("OneDarkish", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\OneDarkish.png")
		w.SetContent(loadUI(image, page))
	})
	b19 := widget.NewButton("Otto", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Otto.png")
		w.SetContent(loadUI(image, page))
	})
	b20 := widget.NewButton("OutrunDark", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\OutrunDark.png")
		w.SetContent(loadUI(image, page))
	})

	buttons := widget.NewVBox(
		b1,
		b2,
		b3,
		b4,
		b5,
		b6,
		b7,
		b8,
		b9,
		b10,
		b11,
		b12,
		b13,
		b14,
		b15,
		b16,
		b17,
		b18,
		b19,
		b20,
	)
	return buttons
}

func loadPageThree() *widget.Box {

	b1 := widget.NewButton("Phosphoria", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Phosphoria.png")
		w.SetContent(loadUI(image, page))
	})
	b2 := widget.NewButton("Pop-Dark", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Pop-Dark.jpg")
		w.SetContent(loadUI(image, page))
	})
	b3 := widget.NewButton("ShadowCustom", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\ShadowCustom.png")
		w.SetContent(loadUI(image, page))
	})
	b4 := widget.NewButton("Sleek - bib", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Sleek - bib.png")
		w.SetContent(loadUI(image, page))
	})
	b5 := widget.NewButton("Sleek - deep", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Sleek - deep.png")
		w.SetContent(loadUI(image, page))
	})
	b6 := widget.NewButton("Sleek - deeper", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Sleek - deeper.png")
		w.SetContent(loadUI(image, page))
	})
	b7 := widget.NewButton("Sleek - psycho", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Sleek - psycho.png")
		w.SetContent(loadUI(image, page))
	})
	b8 := widget.NewButton("SolarizedDark", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\SolarizedDark.png")
		w.SetContent(loadUI(image, page))
	})
	b9 := widget.NewButton("Spicy", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Spicy.png")
		w.SetContent(loadUI(image, page))
	})
	b10 := widget.NewButton("Sweet", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Sweet.png")
		w.SetContent(loadUI(image, page))
	})
	b11 := widget.NewButton("TrekyGoldenrod", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\TrekyGoldenrod.png")
		w.SetContent(loadUI(image, page))
	})
	b12 := widget.NewButton("Twasi", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Twasi.png")
		w.SetContent(loadUI(image, page))
	})
	b13 := widget.NewButton("Vaporwave - SeaPunk", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Vaporwave - SeaPunk.png")
		w.SetContent(loadUI(image, page))
	})
	b14 := widget.NewButton("Vaporwave - NewRetro", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Vaporwave - NewRetro.png")
		w.SetContent(loadUI(image, page))
	})
	b15 := widget.NewButton("VPFut", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\VPFut.png")
		w.SetContent(loadUI(image, page))
	})
	b16 := widget.NewButton("WintergatanBlueprint", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\WintergatanBlueprint.png")
		w.SetContent(loadUI(image, page))
	})
	b17 := widget.NewButton("YoutubeDark", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\YoutubeDark.png")
		w.SetContent(loadUI(image, page))
	})

	buttons := widget.NewVBox(
		b1,
		b2,
		b3,
		b4,
		b5,
		b6,
		b7,
		b8,
		b9,
		b10,
		b11,
		b12,
		b13,
		b14,
		b15,
		b16,
		b17,
	)
	return buttons
}

func loadPageDrib() *widget.Box {

	b1 := widget.NewButton("base", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - base.png")
		w.SetContent(loadUI(image, page))
	})
	b2 := widget.NewButton("beach-sunset", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - beach-sunset.png")
		w.SetContent(loadUI(image, page))
	})
	b3 := widget.NewButton("dark", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - dark.png")
		w.SetContent(loadUI(image, page))
	})
	b4 := widget.NewButton("dracula", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - dracula.png")
		w.SetContent(loadUI(image, page))
	})
	b5 := widget.NewButton("gruvbox", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - gruvbox.png")
		w.SetContent(loadUI(image, page))
	})
	b6 := widget.NewButton("horizon", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - horizon.png")
		w.SetContent(loadUI(image, page))
	})
	b7 := widget.NewButton("nord-dark", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - nord-dark.png")
		w.SetContent(loadUI(image, page))
	})
	b8 := widget.NewButton("nord-light", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - nord-light.png")
		w.SetContent(loadUI(image, page))
	})
	b9 := widget.NewButton("purple", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - purple.png")
		w.SetContent(loadUI(image, page))
	})
	b10 := widget.NewButton("samourai", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - samourai.png")
		w.SetContent(loadUI(image, page))
	})
	b11 := widget.NewButton("white", func() {
		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - white.png")
		w.SetContent(loadUI(image, page))
	})

	buttons := widget.NewVBox(
		b1,
		b2,
		b3,
		b4,
		b5,
		b6,
		b7,
		b8,
		b9,
		b10,
		b11,
	)
	return buttons
}

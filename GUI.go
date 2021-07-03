package main

import (
	"fyne.io/fyne"
	"fyne.io/fyne/app"
	"fyne.io/fyne/canvas"
	"fyne.io/fyne/container"
	"fyne.io/fyne/layout"
	"fyne.io/fyne/theme"
	"fyne.io/fyne/widget"
)

var w fyne.Window
var page string
var index int

func StartGUI() {

	a := app.New()
	w = a.NewWindow("Theme Select")

	getFirst()

	a.Settings().SetTheme(theme.DarkTheme())
	w.Resize(fyne.NewSize(1600, 900))
	w.ShowAndRun()
}

func setContent(i int) {
	image := canvas.NewImageFromFile(binGallery + getImages()[i])
	w.SetContent(loadUI(image))
	index = i
}

func getFirst() {

	page = "first"
	counter := 0

	setContent(counter)
}

func getSecond() {

	page = "second"
	counter := 11

	setContent(counter)
}

func confirmButton() {
	ChangeTheme(index)
}

func backButton() {
	if page == "second" {
		getFirst()
	}
}

func forwardButton() {
	if page == "first" {
		getSecond()
	}
}

func loadBar() (*widget.Toolbar, *widget.Toolbar) {

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

func loadUI(pic *canvas.Image) fyne.CanvasObject {

	bar, confirm := loadBar()

	var entries *widget.Box

	if page == "first" {
		entries = loadPageOne()
	} else if page == "second" {
		entries = loadPageTwo()
	}

	list := fyne.NewContainerWithLayout(layout.NewBorderLayout(bar, confirm, nil, nil),
		entries, bar, confirm)

	ui := container.NewHSplit(list, pic)
	ui.Offset = 0.15

	return ui
}

func loadPageOne() *widget.Box {

	b1 := widget.NewButton(getImageNames()[0], func() {
		counter := 0
		setContent(counter)
	})
	b2 := widget.NewButton(getImageNames()[1], func() {
		counter := 1
		setContent(counter)
	})
	b3 := widget.NewButton(getImageNames()[2], func() {
		counter := 2
		setContent(counter)
	})
	b4 := widget.NewButton(getImageNames()[3], func() {
		counter := 3
		setContent(counter)
	})
	b5 := widget.NewButton(getImageNames()[4], func() {
		counter := 4
		setContent(counter)
	})
	b6 := widget.NewButton(getImageNames()[5], func() {
		counter := 5
		setContent(counter)
	})
	b7 := widget.NewButton(getImageNames()[6], func() {
		counter := 6
		setContent(counter)
	})
	b8 := widget.NewButton(getImageNames()[7], func() {
		counter := 7
		setContent(counter)
	})
	b9 := widget.NewButton(getImageNames()[8], func() {
		counter := 8
		setContent(counter)
	})
	b10 := widget.NewButton(getImageNames()[9], func() {
		counter := 9
		setContent(counter)
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
	)
	return buttons
}

func loadPageTwo() *widget.Box {

	b1 := widget.NewButton(getImageNames()[10], func() {
		counter := 10
		setContent(counter)
	})
	b2 := widget.NewButton(getImageNames()[11], func() {
		counter := 11
		setContent(counter)
	})
	b3 := widget.NewButton(getImageNames()[12], func() {
		counter := 12
		setContent(counter)

	})
	b4 := widget.NewButton(getImageNames()[13], func() {
		counter := 13
		setContent(counter)
	})
	b5 := widget.NewButton(getImageNames()[14], func() {
		counter := 14
		setContent(counter)
	})
	b6 := widget.NewButton(getImageNames()[15], func() {
		counter := 15
		setContent(counter)
	})
	b7 := widget.NewButton(getImageNames()[16], func() {
		counter := 16
		setContent(counter)
	})
	b8 := widget.NewButton(getImageNames()[17], func() {
		counter := 17
		setContent(counter)
	})
	b9 := widget.NewButton(getImageNames()[18], func() {
		counter := 18
		setContent(counter)
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
	)
	return buttons
}

// func loadPageTwo() *widget.Box {

// 	b1 := widget.NewButton("Elementary", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Elementary.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b2 := widget.NewButton("Flatten", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Flatten.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b3 := widget.NewButton("Gradianto", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Gradianto.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b4 := widget.NewButton("Gruvbox-Gold", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Gruvbox-Gold.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b5 := widget.NewButton("Honne", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Honne.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b6 := widget.NewButton("JarvisBot", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\JarvisBot.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b7 := widget.NewButton("Kaapi - gruvbox", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Kaapi - gruvbox.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b8 := widget.NewButton("Kaapi - home", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Kaapi - home.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b9 := widget.NewButton("Lovelace", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Lovelace.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b10 := widget.NewButton("Material-Ocean", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Material-Ocean.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b11 := widget.NewButton("Midnight-Light", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Midnight-Light.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b12 := widget.NewButton("MoonChild", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\MoonChild.jpg")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b13 := widget.NewButton("Night", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Night.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b14 := widget.NewButton("NightMoon", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\NightMoon.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b15 := widget.NewButton("Night-Owl", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Night-Owl.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b16 := widget.NewButton("Nord", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Nord.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b17 := widget.NewButton("NoSleep", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\NoSleep.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b18 := widget.NewButton("OneDarkish", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\OneDarkish.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b19 := widget.NewButton("Otto", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Otto.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b20 := widget.NewButton("OutrunDark", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\OutrunDark.png")
// 		w.SetContent(loadUI(image, page))
// 	})

// 	buttons := widget.NewVBox(
// 		b1,
// 		b2,
// 		b3,
// 		b4,
// 		b5,
// 		b6,
// 		b7,
// 		b8,
// 		b9,
// 		b10,
// 		b11,
// 		b12,
// 		b13,
// 		b14,
// 		b15,
// 		b16,
// 		b17,
// 		b18,
// 		b19,
// 		b20,
// 	)
// 	return buttons
// }

// func loadPageThree() *widget.Box {

// 	b1 := widget.NewButton("Phosphoria", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Phosphoria.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b2 := widget.NewButton("Pop-Dark", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Pop-Dark.jpg")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b3 := widget.NewButton("ShadowCustom", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\ShadowCustom.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b4 := widget.NewButton("Sleek - bib", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Sleek - bib.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b5 := widget.NewButton("Sleek - deep", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Sleek - deep.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b6 := widget.NewButton("Sleek - deeper", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Sleek - deeper.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b7 := widget.NewButton("Sleek - psycho", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Sleek - psycho.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b8 := widget.NewButton("SolarizedDark", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\SolarizedDark.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b9 := widget.NewButton("Spicy", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Spicy.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b10 := widget.NewButton("Sweet", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Sweet.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b11 := widget.NewButton("TrekyGoldenrod", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\TrekyGoldenrod.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b12 := widget.NewButton("Twasi", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Twasi.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b13 := widget.NewButton("Vaporwave - SeaPunk", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Vaporwave - SeaPunk.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b14 := widget.NewButton("Vaporwave - NewRetro", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Vaporwave - NewRetro.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b15 := widget.NewButton("VPFut", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\VPFut.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b16 := widget.NewButton("WintergatanBlueprint", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\WintergatanBlueprint.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b17 := widget.NewButton("YoutubeDark", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\YoutubeDark.png")
// 		w.SetContent(loadUI(image, page))
// 	})

// 	buttons := widget.NewVBox(
// 		b1,
// 		b2,
// 		b3,
// 		b4,
// 		b5,
// 		b6,
// 		b7,
// 		b8,
// 		b9,
// 		b10,
// 		b11,
// 		b12,
// 		b13,
// 		b14,
// 		b15,
// 		b16,
// 		b17,
// 	)
// 	return buttons
// }

// func loadPageDrib() *widget.Box {

// 	b1 := widget.NewButton("base", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - base.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b2 := widget.NewButton("beach-sunset", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - beach-sunset.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b3 := widget.NewButton("dark", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - dark.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b4 := widget.NewButton("dracula", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - dracula.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b5 := widget.NewButton("gruvbox", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - gruvbox.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b6 := widget.NewButton("horizon", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - horizon.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b7 := widget.NewButton("nord-dark", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - nord-dark.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b8 := widget.NewButton("nord-light", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - nord-light.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b9 := widget.NewButton("purple", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - purple.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b10 := widget.NewButton("samourai", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - samourai.png")
// 		w.SetContent(loadUI(image, page))
// 	})
// 	b11 := widget.NewButton("white", func() {
// 		image = canvas.NewImageFromFile(bin + "\\Gallery\\Dribbblish - white.png")
// 		w.SetContent(loadUI(image, page))
// 	})

// 	buttons := widget.NewVBox(
// 		b1,
// 		b2,
// 		b3,
// 		b4,
// 		b5,
// 		b6,
// 		b7,
// 		b8,
// 		b9,
// 		b10,
// 		b11,
// 	)
// 	return buttons
// }

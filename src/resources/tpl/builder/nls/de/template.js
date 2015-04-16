﻿define(
	 ({
		builder: {
			layouts: {
				tabTitle: "Mit Registerkarten",
				tabDescr: "Vorhandene Karten und andere Inhalte mit Registerkarten präsentieren und ein optionales Fenster für beschreibenden Text verwenden.",
				tabItem: "Registerkarte",
				tabItems: "Registerkarten",
				sideTitle: "Side Accordion",
				sideDescr: "Die vorhandenen Karten und andere Inhalte mit einem einblendbaren Steuerelement präsentieren, das beschreibenden Text enthält.",
				sideItem: "Eintrag",
				sideItems: "Einträge",
				bulletTitle: "Mit Aufzählungszeichen",
				bulletDescr: "Vorhandene Karten und andere Inhalte mit Aufzählungszeichen und einem optionalen Fenster für beschreibenden Text präsentieren.",
				bulletItem: "Aufzählungszeichen",
				bulletItems: "Aufzählungszeichen"
			},
			common: {
				lblStatus1: "Veröffentlicht",
				lblStatus3: "Ausgeblendet"
			},
			settingsLayoutOptions: {
				title: "Layout-Optionen",
				lblDescription: "Beschreibung",
				lblLegend: "Legendenplatzierung",
				tooltipLegend: "Festlegen, wo die Kartenlegende angezeigt werden soll. Sie können die Legende für jede Karte aktivieren, wenn Sie sie hinzufügen und konfigurieren.",
				lblDropdown: "Dropdown",
				lblBelowDesc: "Unterhalb der Beschreibung",
				lblOnPanel: "Als Fenster",
				lblPanelDescAndLegend: "Beschreibungs- und Legendenfenster",
				lblPanelDescAndOrLegend: "Fenster \"Beschreibung und/oder Legende\"",
				lblPanelDesc: "Fenster \"Beschreibung\"",
				lblPanelLegend: "Fenster \"Legende\"",
				lblPanelAccordion: "Fenster \"Accordion\"",
				cfgLeft: "Links",
				cfgRight: "Rechts",
				cfgSmall: "Klein",
				cfgMedium: "Mittel",
				cfgLarge: "Groß",
				lblNumbering: "Zahlen anzeigen",
				lblReverse: "Nummerierung umkehren",
				canOverlapMap: "kann Kartenposition überlappen"
			},
			settingsMapOptions: {
				title: "Kartenoptionen",
				lblOverview: "Übersichtskarte",
				tooltipOverview: "Eine kleine Übersichtskarte mit der Hauptkarte anzeigen.",
				lblLocate: "Schaltfläche \"Suchen\"",
				tooltipLocate: "Diese Funktion wird von den meisten Browsern für mobile Geräte und Desktops (Internet Explorer 9) unterstützt.",
				lblGeocoder: "Adressen- oder Ortssuche",
				tooltipGeocoder: "Benutzern das Suchen von Adressen und Orten auf Ihren Karten erlauben.",
				lblSync: "Kartenpositionen synchronisieren",
				tooltipSync: "Wenn diese Option aktiviert ist, wird die Anfangsposition der ersten Karte in Ihrer Reihe auf alle Karten angewendet und die Navigation von Benutzern in einer Karte wird in allen Karten widergespiegelt. Deaktivieren Sie sie für die Position jeder Karte, damit sie unabhängig bleibt."
			},
			initPopup: {
				title: "Willkommen bei"
			},
			addEditPopup: {
				lblAdd: "Hinzufügen",
				lblEdit: "Bearbeiten",
				disabled: "\"Abschnitt hinzufügen\" ist deaktiviert, da die maximale Anzahl zulässiger %LBL_LAYOUT% erreicht ist.",
				titleAdd: "Hinzufügen",
				titleEdit: "Bearbeiten",
				stepMainStageNextTooltip: "Den Titel und Inhalt von %LBL_LAYOUT% eingeben",
				titlePlaceholder: "Titel von %LBL_LAYOUT%..."
			},
			textEditor: {
				placeholder1: "Text, Links und kleine Grafiken hier hinzufügen.",
				placeholder2: "Wenn das Fenster leer bleibt, wird es ausgeblendet."
			},
			organizePopup: {
				title: "Organisieren",
				lblHeader: "Serien per Drag & Drop von %LBL_LAYOUT%% organisieren.",
				lblColTitle: "Titel",
				lblColStatus: "Status",
				btnApplyWarning: "Löschen von %NB% %LBL_LAYOUT% bestätigen",
				deleteTooltip: "Löschen",
				firstSectionExplain: "(Der Startseitenabschnitt kann nicht verschoben werden)"
			},
			help: {
				lblHelp: "Hilfe",
				lblAdd: "Hinzufügen",
				lblSettings: "Einstellungen",
				lblOrga: "Organisieren",
				lblEdit: "Änderungen",
				lblPublish: "Freigeben",
				lblTips: "Tipps",
				lblMore: "Sie wünschen weitere Informationen?",
				lblLink: "Besuchen Sie die Esri Story Maps-Website.",
				content1Div1: "Erstellen Sie die %TPL_NAME% mit der Schaltfläche \"Hinzufügen\", um jede Karte oder andere Inhalte zu dem Layout hinzuzufügen. Die anderen Inhalte können Bilder, Videos, eingebettete Webseiten oder Code sein. Sie können beispielsweise festlegen, dass Ihren Lesern ein einführendes Bild oder Video angezeigt wird, wenn sie die %TPL_NAME% zum ersten Mal starten, bevor sie Ihre Karten erkunden.",
				content1Div2: "Wenn Sie auf die Schaltfläche \"Hinzufügen\" klicken, wird ein Dialogfeld angezeigt, in dem Sie die Karte oder andere Inhalte auswählen können, die Sie hinzufügen möchten. Sie können beispielsweise die Position angeben, die auf der Karte angezeigt werden soll, deren Legende anzeigen usw.",
				content2Div1: "Im Dialogfeld \"Einstellungen\" kann das Erscheinungsbild für %TPL_NAME% geändert werden. Sie können das Layout ändern, ein anderes Farbschema auswählen, festlegen, wo die Karte angezeigt werden soll, usw.",
				content2Div2: "Sie können das Esri Logo in der Kopfzeile von %TPL_NAME% auch durch Ihr eigenes Logo ersetzen, um Ihre Marke widerzuspiegeln. Außerdem können Sie die Website festlegen, die gestartet wird, wenn Leser auf Ihr Logo klicken, um weitere Informationen aufzurufen.",
				content3Div1: "Im Dialogfeld \"Organisieren\" können Sie %TPL_NAME% verwalten. In diesem Dialogfeld kann die Reihenfolge der Reihen per Drag & Drop geändert werden.",
				content3Div2: "Inhalte können auch gelöscht oder ausgeblendet werden. Das Ausblenden ist nützlich, wenn Sie neue Inhalte vorbereiten, die für die Einbeziehung in die Story Map noch nicht bereit sind.",
				content4Div1: "Sie haben einen Fehler gefunden oder möchten Änderungen vornehmen? Keine Sorge. Suchen Sie das Bearbeitungssymbol in der App, um Inhalte zu ändern. Sie werden die Bearbeitungsfunktionen beim Entwickeln von %TPL_NAME% häufig verwenden!",
				content5Div1: "%TPL_NAME% ist beim Speichern zunächst privat. Verwenden Sie die Schaltfläche \"Freigeben\", um %TPL_NAME% für andere Benutzer freizugeben. Sie können %TPL_NAME% öffentlich freigeben, sodass jeder darauf zugreifen kann.",
				content5Div2: "Je nach Konto haben Sie außerdem die Möglichkeit, %TPL_NAME% nur für Benutzer in Ihrer Organisation freizugeben, damit andere nicht darauf zugreifen können.",
				content6Div1: "Die Karten in einer Reihe werden standardmäßig synchronisiert, um dieselbe Position anzuzeigen. Dies bedeutet, dass die in der ersten Karte angezeigte Position automatisch auf alle anderen Karten angewendet wird und falls ein Leser auf eine andere als die aktuell angezeigte Position in der Karte zoomt oder schwenkt, dies ebenfalls für die anderen Karten übernommen wird.",
				content6Div2: "Wenn die Reihe beispielsweise verschiedene thematische Daten für eine Stadt anzeigt, kann ein Leser auf deren Nachbarschaft zoomen und anschließend einfach zwischen den Registerkarten wechseln, um die Karten für diesen Bereich anzuzeigen.",
				content6Div3: "Um die Positionssynchronisierung zu deaktivieren, wechseln Sie zum Dialogfeld \"Einstellungen\", und deaktivieren Sie diese Einstellung auf der Registerkarte \"Kartenoptionen\".",
				content6AltDiv1: "Kartenpositionen werden standardmäßig synchronisiert. Wenn die Synchronisierung deaktiviert wird, kann auf jeder Karte eine andere Position angezeigt werden.",
				content6AltDiv2: "Synchronisierung EIN",
				content6AltDiv3: "Synchronisierung AUS",
				content6AltDiv4: "Um die Synchronisierung zu deaktivieren, wechseln Sie zu Einstellungen > Kartenoptionen, und deaktivieren Sie das Kontrollkästchen \"Kartenpositionen synchronisieren\"."
			},
			landing: {
				lblAdd: "Welchen Namen möchten Sie der %LAYOUT_TITLE% Map Series geben?",
				phAdd: "Titel eingeben...",
				lblOR: "Oder",
				lblHelp: "Einführung"
			}
        }
    })
);
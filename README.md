# Tâi-gí
## Kài-siāu
Chit-ê Tâi-gí su-ji̍p-hoat sú-iōng jquery.ime.

## Run hoān-lē
### Tiám-tuh
- $ āu ê jī sī ài phah-ji̍p cmd lāi ê
	- Hō͘ &lt;&gt; pau--khí-lâi ê jī sī ē piàn-hòa ê kah lí ê tiān-náu ū koan-hē, chhin-chhiūⁿ &lt;Lí ê bûn-kiāⁿ&gt;, tiō sī kóng lí tiān-náu lāi ê  "góa ê bûn-kiāⁿ" (我的文件)
- Siá tī chia ê "Lō͘-kèng" lóng sī Unix-style, iōng Windows ê lâng ài hō͘ / kái-chò \
- Nā-sī leh siá .js tóng lóng ài iōng Unix-style ê "Lō͘-kèng"

### Pō͘-sò͘
1. Chún-pī su-iàu ê ke-si
	1. Iōng git tang-ló͘  'jquery.ime'
		- [https://github.com/wikimedia/jquery.ime](https://github.com/wikimedia/jquery.ime)
	2. Chong Node.js
		- [https://nodejs.org/en/](https://nodejs.org/en/)
2. Siat-tēng
	1. Khì &lt;khǹg jquery.ime.tws ê ūi&gt;/example, iōng kí-sū-pún (記事本) phah-khui lāi-té ê node_server.js
	2. Tī tē-chhit hâng, hō͘ '' pau--khí-lâi ê sī lí khǹg 'jquery.ime' ê ūi, lí ài kái kàu lí chin-chiàⁿ khǹg 'jquery.ime' ê só͘-chai.
		- M̄-koh lí mā ē-sái hō͘ 'jquery.ime' soah kàu kah 'jquery.ime.tws' kāng-khoán ê ūi.
3. $ cd &lt;khǹg jquery.ime.tws ê ūi&gt;/example
	- Nā-sī lí iōng Windows, khó-lêng ài phah $ cd /d &lt;khǹg jquery.ime.tws ê ūi&gt;\example
4. npm install
5. $ node node_server.js
6. Phah-khui browser, su-ji̍p 'localhost:5001'
7. Tiám he 'su-ji̍p-khu', ni̍h ctrl+m
8. Phah Tâi-gí

# English

## Introduction
This Taiwanese input method using jquery.ime.

## Run example

### Hint:
- line start with $ mean you need to use Command Prompt to enter the following text
	- text surrounded by &lt;&gt; mean variable, like &lt;your document folder&gt; which mean your Documents folder
- All path here is writen in Unix-style, for Windows user, please replace / with \
- All path in .js file must written in Unix-style

### Step
1. Prepare all prerequirements
	1. Download 'jquery.ime' via git
		- [https://github.com/wikimedia/jquery.ime](https://github.com/wikimedia/jquery.ime)
	2. Install Node.js
		- [https://nodejs.org/en/](https://nodejs.org/en/)
		- we suggest using LTS
2. Setup
	1. Go to &lt;location of jquery.ime.tws&gt;/example and open file 'node_server.js' with notepad (or text editor you prefered)
	2. At line 7, text surrounded by '' mean the relatived path to 'jquery.ime', please change it to the path of jquery.ime in your computer
		- or just move 'jquery.ime' to where 'jquery.ime.tws' is
3. $ cd &lt;location of jquery.ime.tws&gt;/example
	- if you using Windows, you might use $ cd /d &lt;location of jquery.ime.tws&gt;\example
4. $ npm install
5. $ node node_server.js
6. Open your browser and enter 'localhost:5001'
7. Click that 'text area' and press ctrl+m
8. Enter Taiwanese

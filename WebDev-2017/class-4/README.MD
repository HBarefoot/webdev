## Instructions
In this exercise, we will be working on updating the styles of a Website. The layout style are already in place, so you will be making changes mostly to the appearance of the text and colors. I recommend that after each change, you open the browser and attempt to view the results of each change. Inspect the element that you are expecting the change to occur in and view the rules that affect this element in the developer tools for your browser.

### Challenges ###
Keep your eyes open for these. Remember **challenges** which are a bit harder than the typical material that we have covered. As the course advances you will find more and more challenges in the exercises. Feel free to skip these challenges if you don't know how to solve them. 

1. Open ```index.html``` in your browser. Explore the Sunny Acres Website by clicking on the links in the navigation panel. 
2. Open ```index.html``` using Visual Studio code to start making edits to the file as described in the following instructions. (Some instructions are diplicated in the file(s).) After making each change, reload the page(s) in the browser to see the modifications to the page.
3. Add a link to the ```sa_styles.css``` file to this page. Use the existing link tag as a guide. Remember that when linking css files, the order of the links is important. Place this new link after the first one.
4. Notice that this file also contains a ```<style>``` tag inside the head. This tag is used to create embedded styles within the HTML document. While this does not allow for reusability of the styles, it is one way that unique style rules may be assigned to a particular page. I generally recommend making an external stylesheet rather than using this technique.
5. After each of the rules within the style tag mentioned in #4, insert a comment in the HTML code that includes the text which is affected by this rule in the page. (Hint: Viewing the page in the browser can make this task a little easier.)
6. Open the ```sa_styles.css``` file mentioned in #3 above. The next set of instructions will describe what you should do within this file.
7. Create a rule for the body element that sets the background color to white. And sets the height of the lines to be 1.4ems. Set a selection of fonts for the page such that the NobileRegular font defined in the font-face rule above will be used first. But if that fails to load in the browser choose Verdana as the backup. If all else fails then use a generic sans-serif font. The body rule has been started for you.
8. create a rule for level-one headings to set...
	* background color to Red 125, Green 186, Blue 240.
	* foreground color to white
	* font size of 1.7 ems
	* kerning .4 ems **challenge**
	* line spacing of 1.8 ems. **challenge**
	* and an left indentation of 1 em. **challenge**
9. Create a rule for level-two headings to set...
	* background color Green 165
	* foreground color to white or off-white
	* font size of the same as other body text
	* kerning .4 ems **challenge**
	* line spacing of 1.8 ems. **challenge**
	* and an left indentation of 1 em. **challenge**
10. Create (a) rule(s) for the navigation panel to set ....
	* background color Red 125, Green 186, Blue 240.
	* foreground color to the same as the body text
	* font size of the same as other text
	* kerning to the same as other text **challenge**
	* the bullets for the list of links to "no bullets" **challenge**
	* Make the first letter in each link to be uppercase **challenge**
	* and some padding to the left of .5 ems. **challenge**
11. Create (a) rule(s) that changes the way that links are displayed in the navigation panel. When ever the user hovers over a link lets change the link color to...
		```Red 83, Green 142, Blue 213```
otherwise the link should be white. (Hint: be sure that any links that are not in the navigation panel remain uneffected by this rule. )
12. For any list that immediately follows a level-2 heading in a section, make a rule that sets the bullet icon to be the arrow image. The property to do so is below:
	```list-style-type: url('images/arrow.png')```
13. Create (a) rule(s) for the address in the footer to set ....
	* background color Red 55, Green 102, Blue 55.
	* foreground color to white or offwhite (your choice).
	* text to be center aligned.
	* set the font to be 'Times New Roman' or some other serif font (use the proper fallback order).
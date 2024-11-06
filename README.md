# ilw-profile

Links: **[ilw-profile in Builder](https://builder3.toolkit.illinois.edu/component/ilw-profile/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

This is a profile "meta-component" that is used to create a user profile with name, job title, appointments, contact information, publications, etc. 

This will handle formatting of the image (placing it in a circle map) and will format the name, title, and contact infomration. This will also handle column layout and move the name and title if there's no additional information. 

Everything that is not "name, title, contact" will be placed in a large block under all the other information. It is the responsibility of the component user to create headings for the general content area and to use their own component option to display the information. 

## Code Examples

```html
    <ilw-profile>
        <h1 slot="name">Jane Smith</h1>
        <p slot="title">Job Title, Department</p>
        <img slot="image" src="photo.png" alt="Profile of Jane Smith">
        <div slot="contact">
            <div class="ilw-profile--icon">
                <div>icon</div>
                <p>Curriculum & Instruction<br />
                    110A Education<br />
                    Champaign IL 61820</p>
            </div>
            <div class="ilw-profile--icon">
                <div>icon</div>
                <p>217-555-1000</p>
            </div>
            <div class="ilw-profile--icon">
                <div>icon</div>
                <p>M-F 8:00 AM - 5:00 PM In Office</p>
            </div>
        </div>
        <div slot="left">
            Left side content
        </div>
        <div>
            <h2>Biography</h2>
            <p>This statement can either be written in first person or third person. Third person is perhaps more formal and first person more casual and inviting. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
            <h2>Key Professional Appointments</h2>
            <ul>
                <li>Interim Associate Dean, College of Education , University of Illinois, Urbana-Champaign</li>
                <li>Sheila M. Miller Professor, Curriculum and Instruction , University of Illinois, Urbana-Champaign </li>
                <li>Professor, Curriculum and Instruction , University of Illinois, Urbana-Champaign</li>
                <li>Professor, Center for Global Studies , University of Illinois, Urbana-Champaign</li>
                <li>Editorial activity , Research in the Teaching of English (Journal)</li>
            </ul>
        </div>
    </ilw-profile>
```

### Attributes

  * `right`: a boolean variable that will force everything except the image to the right, even if there is additional information. 
  * `circle`: a boolean variable that will add a circle map for the image. 
  * `theme`: the theme/background of the content. Options are only `gray`, default is white. 
  * `width`: whether or not this is contained in the parent, if it will expand to full width (`full`), or if it will expand to full width but keep the text in a margin (`auto`), or if it will restrict it to a page margin (`page`).
  * `padding`: shorthand for padding around the object

### Icon CSS helper class

There is a helper CSS class called `ilw-profile--icon` that is intended to be used for the contact area. This will allow the user to create two columns -- one for the icon (or a blank div if you want the text indented without the icon), and one for the text. You can use the campus icon set, the toolkit `ilw-icon` or a third-party icon set. 

## Accessibility Notes and Use

The more important thing is to make sure your content has lists and headings for large groups of publications, appointments, etc. 

The name should be an `h1` tag. 

You can use the Accordion or Detail-Summary tags to organize your information appropriately. These should be styled as you see fit. 

## External References

https://cdn.brand.illinois.edu/icons.html 
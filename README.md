# ilw-profile

Links: **[ilw-profile in Builder](https://builder3.toolkit.illinois.edu/component/ilw-profile/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

This is a profile "meta-component" that is used to create a user profile with name, job title, appointments, contact information, publications, etc. 

This will handle formatting of the image (placing it in a circle map). This will also handle column layout. Everything that is not "name, title, contact" will be placed in a large block under all the other information. It is the responsibility of the component user to create headings for the general content area. 

## Code Examples

```html
<ilw-profile>
  <h1 slot="name">Jane Smith</h1>
  <p slot="title">Job Title, Department</h1>
  <img slot="image" src="" alt="Profile of Jane Smith">
  <div slot="contact">
    <div class="ilw-icon-area">
      <ilw-icon name="address">
      <p>Curriculum & Instruction<br />
      110A Education<br />
      Champaign IL 61820</p>
    </div>
    <div class="ilw-icon-area">
      <ilw-icon name="phone">
      <p>217-555-1000</p>
    </div>
    <div class="ilw-icon-area">
      <ilw-icon name="hours">
      <p>M-F 8:00 AM - 5:00 PM In Office</p>
    </div>
...
  </div>
  <div>
     ...
  </div>
</ilw-profile>
```

### Attributes

* `force-right`: Force the contact information to the right column. Otherwise, it will move the contact infomration only if the default slot is blank. 

## Accessibility Notes and Use

The more important thing is to make sure your content has lists and headings for large groups of publications, appointments, etc. 

The name should be an `h1` tag. 

The image should have an alt tag of "Profile of xxxxxx". 

You can use the Accordion or Detail-Summary tags to organize your information appropriately. These should be styled as you see fit. 

## External References

https://cdn.brand.illinois.edu/icons.html 
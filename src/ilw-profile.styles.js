import { css } from 'lit';

export default css`
.profile { 
    display: grid;
    grid-template-columns: 350px auto;
    grid-template-rows: auto auto auto;
    column-gap: 30px;
}
.profile-outer.fixed {
        left:50%;
        margin-left:-50vw;
        margin-right:-50vw;
        padding-left:0;
        padding-right:0;
        position:relative;
        right:50%;
        width:100vw;
    }

    .profile.page, .profile.fixed {
        margin: 0 var(--ilw-margin--side, 0);
    }

.profile-outer.gray {
    background-color: var(--il-storm-lighter-4);
}
.profile .left-image {
    grid-area: 1 / 1 / span 2 / auto;
}

.profile .right-name {
    grid-area: 1 / 2 / auto / auto;
}

.profile .left-contact {
    grid-area: 3 / 1 / auto / auto;
}

.profile .right-main {
    grid-area: 2 / 2 / span 3 / auto;
}

.profile.spaced .left-image {
    grid-area: 1 / 1 / span 3 / auto;
}

.profile.spaced .right-name {
    grid-area: 1 / 2 / auto / auto;
}

.profile.spaced .left-contact {
    grid-area: 2 / 2 / auto / auto;
}

.profile.spaced .right-main {
    grid-area: 3 / 2 / auto / auto;
}

.profile .image ::slotted(img) {
    width: 350px;
}
.profile .image.round ::slotted(img) {
    border-radius: 50%;
}

@media (max-width: 700px) {
    .profile {
        display: block;
      }
}

.contact-title {
    font-family: var(--il-font-sans);
    font-weight: bold;
}

.title slot::slotted(*) {
    font-style: italic;
`;
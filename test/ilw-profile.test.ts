import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-profile";

const content = html`
        <ilw-profile>
        <h1 slot="name">Jane Smith</h1>
        <p slot="title">Job Title, Department</p>
        <img slot="image" src="photo.png" alt="Profile of Jane Smith">
        <div slot="contact">
            <div class="ilw-profile--icon">
                <div></div>
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
    </ilw-profile>`;

test("renders slotted content", async () => {
    const screen = render(content);
    const element = screen.getByText("Jane Smith");
    await expect.element(element).toBeInTheDocument();
});
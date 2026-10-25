// Imports the page styling.
import './App.css';

// Imports every reusable component through its Index.ts file.
import { Button } from './Components/Button/Index';
import { Card } from './Components/Card/Index';
import { Dropdown } from './Components/Dropdown/Index';
import { HeroImage } from './Components/HeroImage/Index';
import { Img } from './Components/Img/Index';
import { Label } from './Components/Label/Index';
import { RadioButton } from './Components/RadioButton/Index';
import { Table } from './Components/Table/Index';
import { TableCell } from './Components/TableCell/Index';
import { TableFooter } from './Components/TableFooter/Index';
import { TableHeader } from './Components/TableHeader/Index';
import { TableRow } from './Components/TableRow/Index';
import { Text } from './Components/Text/Index';

// App is the main page of the Create React App website.
function App() {
  return (
    // <main> contains the primary content of the page.
    <main className="app">
      {/* Displays the large introductory banner. */}
      <HeroImage
        title="Paolo's UI Garden"
        subtitle="A responsive component library built with React, TypeScript, Storybook, and Styled Components."
        imageUrl="/ui-garden.svg"
      />

      {/* Groups the basic reusable components. */}
      <section className="gallery-section">
        <h2>Basic Components</h2>

        {/* CSS Grid will arrange these examples responsively. */}
        <div className="component-grid">
          {/* Each article displays and identifies one component. */}
          <article className="component-example">
            <h3>Button</h3>
            <Button label="Click me" />
          </article>

          <article className="component-example">
            <h3>Label</h3>

            {/* htmlFor could connect this Label to an input with
                the id "email-example". */}
            <Label
              text="Email address"
              htmlFor="email-example"
            />
          </article>

          <article className="component-example">
            <h3>Text</h3>
            <Text content="This is a reusable Text component." />
          </article>

          <article className="component-example">
            <h3>Dropdown</h3>

            {/* The options array supplies the Dropdown choices. */}
            <Dropdown
              options={[
                { label: 'Choose a component', value: '' },
                { label: 'Button', value: 'button' },
                { label: 'Card', value: 'card' },
              ]}
            />
          </article>

          <article className="component-example">
            <h3>Radio Button</h3>

            {/* name identifies the radio button group. */}
            <RadioButton
              label="Select this option"
              name="gallery-example"
            />
          </article>

          <article className="component-example">
            <h3>Img</h3>

            {/* alt provides an accessible image description. */}
            <Img
              src="/ui-garden.svg"
              alt="Responsive placeholder"
            />
          </article>

          <article className="component-example">
            <h3>Card</h3>
            <Card
              title="Reusable Card"
              description="Cards organize an image, heading, and description."
              imageUrl="/ui-garden.svg"
            />
          </article>
        </div>
      </section>

      {/* Demonstrates the complete data-driven Table component. */}
      <section className="gallery-section">
        <h2>Complete Table</h2>

        {/* headers creates the headings.
            rows is an array containing one array per row. */}
        <Table
          headers={['Component', 'Category', 'Status']}
          rows={[
            ['Button', 'Input', 'Complete'],
            ['Label', 'Text', 'Complete'],
            ['Dropdown', 'Input', 'Complete'],
          ]}
          footerText="3 components shown"
        />
      </section>

      {/* Demonstrates the individual table-part components. */}
      <section className="gallery-section">
        <h2>Individual Table Components</h2>

        {/* This container allows horizontal scrolling on small screens. */}
        <div className="table-container">
          <table className="component-table">
            {/* TableHeader creates the <thead> section. */}
            <TableHeader
              headings={['Part', 'Description']}
            />

            {/* HTML requires normal table rows to be inside <tbody>. */}
            <tbody>
              {/* TableRow creates an entire row from an array. */}
              <TableRow
                cells={[
                  'TableRow',
                  'Displays a complete row',
                ]}
              />

              {/* TableCell creates one cell at a time. */}
              <tr>
                <TableCell content="TableCell" />
                <TableCell content="Displays one cell" />
              </tr>
            </tbody>

            {/* TableFooter creates the <tfoot> section.
                columnSpan makes it cover both columns. */}
            <TableFooter
              content="Table component examples"
              columnSpan={2}
            />
          </table>
        </div>
      </section>
    </main>
  );
}

// Makes App available to index.tsx, which displays it in the browser.
export default App;

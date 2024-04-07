export const metadata={
    title: "Tienda oficial",
    description: "Esta es la pagina principal de mi tienda",
    keywords: "tienda, online, ecommerce",
  }

export default function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Seccion tienda</h3>
        <ul>
          <li>Categoria</li>
          <li>Productos</li>
        </ul>
      </nav>
      {children}
    </>
  );
}

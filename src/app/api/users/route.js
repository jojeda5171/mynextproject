import { NextResponse } from "next/server";

console.log(process.env.TOKEN);
console.log(process.env.SECRET_KEY);

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request) {
  const { Nombre, Apellido } = await request.json();
  console.log(Nombre, Apellido);
  return NextResponse.json({ message: "Creando Datos" });
}

export function PUT() {
  return NextResponse.json({ message: "Actualizando Datos" });
}

export function DELETE() {
  return NextResponse.json({ message: "Eliminando Datos" });
}

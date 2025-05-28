export function Layout(props: any) {
  return <section className="flex gap-10" {...props} />;
}

function Aside(props: any) {
  return <aside {...props} className={`w-1/4 ${props.className}`} />;
}

function Body(props: any) {
  return <main {...props} className={`w-3/4 ${props.className}`} />;
}

Layout.Aside = Aside;
Layout.Body = Body;

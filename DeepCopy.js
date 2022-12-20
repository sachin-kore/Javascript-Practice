const a = {
    de: "hello",
    me: "demo",
    pt: "cmdg",
    rt: "mdgd"
}

let b = { ...a }
b.me = "sidda"
console.log(a);
console.log(b);
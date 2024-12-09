cont = 0;
while (cont == 0)
{
    let pizza = (prompt("Desea una Pizza Vegetaria o Normal?")).toLowerCase();
    if(pizza == "normal")
        {
            while (cont == 0) 
            {
                let ingre = (prompt("Los ingredientes opcionales son Pepperoni, Jamon y Salmon")).toLowerCase();
                if (ingre == "pepperoni") 
                {
                    cont+=1;
                    alert("La Pizza elegida es Normal y lleva Mozzarella,Tomate y Pepperoni");
                }
                else if (ingre == "jamon") 
                {
                    cont+=1;
                    alert("La Pizza elegida es Normal y lleva Mozzarella,Tomate y Jamon");
                }
                else if (ingre == "salmon") 
                {
                        cont+=1;
                        alert("La Pizza elegida es Normal y lleva Mozzarella,Tomate y Salmon");
                }
                else alert("Ingrediente invalido escribalo denuevo");
            }
        }
    else if(pizza == "vegetariana")
    {
        while (cont == 0) 
        {
            let ingre = (prompt("Los ingredientes opcionales son Pimiento y Tofu")).toLowerCase();
            if (ingre == "pimiento") 
            {
                cont+=1;
                alert("La Pizza elegida es Vegetarina y lleva Mozzarella,Tomate y Pimiento");
            }
            else if (ingre == "tofu") 
            {
                cont+=1;
                alert("La Pizza elegida es Vegetarina y lleva Mozzarella,Tomate y pimiento");
            }
            else alert("Ingrediente invalido escribalo denuevo");
        }
    }
    else alert("Ingrese el tipo de Pizza denuevo");
}

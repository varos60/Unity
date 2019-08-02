using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OperacionesBotones : MonoBehaviour
{
    public Estado estado;
    public void Guardar()
    {
        Gestor_Estado.Guardar(estado);
    }
    public void Cargar()
    {
        Gestor_Estado.Cargar(estado);
    }
}

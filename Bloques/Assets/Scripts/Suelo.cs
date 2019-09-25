using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Suelo : MonoBehaviour
{
    public Vidas vidas;
    public SonidosFinPartida sonidosFinPartida;

    void OnTriggerEnter(Collider other)
    {
        sonidosFinPartida.ErrorSound();
        vidas.PerderVida();
    }
}

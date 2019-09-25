using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Vidas : MonoBehaviour
{
    public static int vidas = 3;
    public Text textoVidas;
    public Pelota pelota;
    public Barra barra;
    public GameObject gameOver;
    public NextLevel nextLevel;
    public SonidosFinPartida sonidosFinPartida;


    void Start()
    {
        SetTextVida();
    }

    void SetTextVida() {
        textoVidas.text = "VIDAS: " + Vidas.vidas.ToString();
    }

    public void PerderVida()
    {
        if (vidas <= 0) return;
        Vidas.vidas--;
        SetTextVida();        

        if (Vidas.vidas <= 0)
        {
            sonidosFinPartida.GameOverSound();
            gameOver.SetActive(true);            
            pelota.Detener();
            barra.enabled = false;
            nextLevel.level = "Portada";
            nextLevel.ActivarCargarNivel();
        }
        else
        {
            barra.ResetPosition();
            pelota.ResetPosition();
        }
    }
}

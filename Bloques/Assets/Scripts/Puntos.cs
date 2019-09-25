using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Puntos : MonoBehaviour
{
    public static int puntos = 0;
    public Text textoPuntos;
    public GameObject completado;
    public GameObject passLevel;
    public NextLevel nextLevel;
    public Pelota pelota;
    public Barra barra;
    public Transform bloques;
    public SonidosFinPartida sonidosFinPartida;

    void Start()
    {
        SetTextPuntos();
    }

    
    void Update()
    {
        
    }

    void SetTextPuntos()
    {
        textoPuntos.text = "PUNTOS: " + Puntos.puntos.ToString();
    }

    public void GanarPuntos()
    {
        Puntos.puntos++;
        SetTextPuntos();

        if(bloques.childCount <= 0)
        {
            sonidosFinPartida.CompletadoSound();
            pelota.Detener();
            barra.enabled = false;

            if (nextLevel.FinalLevel())
            {
                completado.SetActive(true);                
            }
            else
            {
                passLevel.SetActive(true);                
            }
            nextLevel.ActivarCargarNivel();
        }
    }
}

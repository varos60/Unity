using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Tilemaps;

public enum Algoritmo
{
    PerlinNoise,
    PerlinNoiseSuavizado,
    RandomWalk,
    RandomWalkSuavizado,
    PerlinNoiseCueva,
    RandomWalkCueva,
    TunelDireccional
}

public class Generador : MonoBehaviour
{
    [Header("Referencias")]
    public Tilemap tilemap;
    public TileBase tile;
    [Header("Dimensiones")]
    public int ancho;
    public int alto;
    [Header("Semilla")]
    public bool SemillaAleatoria = true;
    public float semilla = 0;
    [Header("Intervalo")]    
    public int intervalo = 1;
    [Header("Cuevas")]
    public bool bordesSonMuros = true;
    [Header("Perlin Noise Cueva")]
    public float modificador = 0.1f;
    public float offsetX = 0f;
    public float offsetY = 0f;
    [Header("Random Walk Cueva")]
    [Range(0,1)]
    public float porcentaje = 0.25f;
    public bool diagonalMove = false;
    [Header("TunelDireccional")]
    public int AnchoMaximo = 4;
    public int AnchoMinimo = 1;
    [Range(0, 1)]
    public float aspereza = 0.75f;
    public int DesplazamientoMaximo = 2;
    [Range(0, 1)]
    public float Desplazamiento = 0.75f;
    [Header("Algoritmo")]
    public Algoritmo algoritmo = Algoritmo.PerlinNoise;

    public void GenerarMapa()
    {
        tilemap.ClearAllTiles();
        int[,] mapa = null;

        if (SemillaAleatoria)
        {
            semilla = Random.Range(0, 10000f);
        }

        switch (algoritmo)
        {
            case Algoritmo.PerlinNoise:
                mapa = Metodos.GenerarArray(ancho, alto, true);
                mapa = Metodos.PerlinNoise(mapa, semilla);                
                break;
            case Algoritmo.PerlinNoiseSuavizado:
                mapa = Metodos.GenerarArray(ancho, alto, true);
                mapa = Metodos.PerlinNoiseSuiavizado(mapa, semilla, intervalo);
                break;
            case Algoritmo.RandomWalk:
                mapa = Metodos.GenerarArray(ancho, alto, true);
                mapa = Metodos.RandomWalk(mapa, semilla);
                break;
            case Algoritmo.RandomWalkSuavizado:
                mapa = Metodos.GenerarArray(ancho, alto, true);
                mapa = Metodos.RandomWalkSuavizado(mapa, semilla, intervalo);
                break;
            case Algoritmo.PerlinNoiseCueva:
                mapa = Metodos.GenerarArray(ancho, alto, false);
                mapa = Metodos.PerlinNoiseCuevas(mapa, modificador, bordesSonMuros, semilla, offsetX, offsetY);
                break;
            case Algoritmo.RandomWalkCueva:
                mapa = Metodos.GenerarArray(ancho, alto, false);
                mapa = Metodos.RandomWalkCueva(mapa, semilla, porcentaje, bordesSonMuros, diagonalMove);
                break;
            case Algoritmo.TunelDireccional:
                mapa = Metodos.GenerarArray(ancho, alto, false);
                mapa = Metodos.TunelDireccional(mapa, semilla, AnchoMinimo, AnchoMaximo, aspereza, DesplazamientoMaximo, Desplazamiento);
                break;
        }


        if (Application.isPlaying)
        {
            StartCoroutine(Metodos.GenerarMapaDelay(mapa, tilemap, tile));
        }
        else
        {
            Metodos.GenerarMapa(mapa, tilemap, tile);            
        }        
        //int [,] mapa = Metodos.GenerarArray(ancho, alto, false);
        //Metodos.GenerarMapa(mapa, tilemap, tile);
        //Debug.Log("Generar");
    }

    public void LimpiarMapa()
    {
        tilemap.ClearAllTiles();
        //Debug.Log("Limpiar");
    }
}

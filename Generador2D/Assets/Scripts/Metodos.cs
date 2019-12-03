using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Tilemaps;

public class Metodos
{
    /// <summary>
    /// Genera Una Matriz
    /// </summary>
    /// <param name="ancho">Ancho del Mapa 2D</param>
    /// <param name="alto">Alto del Mapa 2D</param>
    /// <param name="vacio"> True si se quiere inicializar a 0 todo</param>
    /// <returns>Devuelve el Mapa2D Generado</returns>
    public static int[,] GenerarArray(int ancho, int alto, bool vacio)
    {
        int[,] mapa = new int[ancho, alto];
        for (int x = 0; x < ancho; x++)
        {
            for (int y = 0; y < alto; y++)
            {                                
                mapa[x, y] = vacio ? 0 : 1;
            }
        }
        return mapa;
    }

    /// <summary>
    /// Genera el Tilemap según las dimensiones que le pasamos
    /// </summary>
    /// <param name="mapa">Matriz con las dimensiones del mapa</param>
    /// <param name="tilemap">Referencia al Objeto Tilemap donde se generan los Tiles</param>
    /// <param name="tile">El tile a pintar</param>
    public static void GenerarMapa(int [,] mapa, Tilemap tilemap, TileBase tile)
    {
        tilemap.ClearAllTiles();
        for (int x = 0; x <= mapa.GetUpperBound(0); x++)
        {
            for (int y = 0; y <= mapa.GetUpperBound(1); y++)
            {
                if (mapa[x,y] == 1)
                {
                    tilemap.SetTile(new Vector3Int(x, y, 0), tile);                    
                }
            }
        }
    }


    public static IEnumerator GenerarMapaDelay(int[,] mapa, Tilemap tilemap, TileBase tile)
    {
        for (int x = 0; x <= mapa.GetUpperBound(0); x++)
        {
            for (int y = 0; y <= mapa.GetUpperBound(1); y++)
            {
                if (mapa[x, y] == 1)
                {
                    tilemap.SetTile(new Vector3Int(x, y, 0), tile);                    
                }
            }
            yield return new WaitForSeconds(0.03f);
        }
    }


    public static int[,] PerlinNoise(int [,] mapa, float semilla)
    {
        int nuevoPunto;//Desde donde empieza a pintar

        float reduccion = 0.5f;//Lo que hace es sumar o restar un valor a la mitad del mapa. Por lo tanto el valor del perlin Noise ha de devolver un valor
        //entre 0.5 y -0.5 para que sea como mucho la mitad del mapa ya sea en negativo o positivo.

        for (int x = 0; x <= mapa.GetUpperBound(0); x++)
        {
            nuevoPunto = Mathf.FloorToInt((Mathf.PerlinNoise(x, semilla) - reduccion) * mapa.GetUpperBound(1));            
            nuevoPunto += mapa.GetUpperBound(1) / 2;         
            for (int y = nuevoPunto; y >=0; y--)
            {
                mapa[x, y] = 1;
            }
        }
        return mapa;
    }

    public static int[,] PerlinNoiseSuiavizado(int [,] mapa, float semilla,  int intervalo)
    {
        if (intervalo > 1)
        {
            Vector2Int posicionActual, posicionAnterior;
            List<int> ruidoX = new List<int>();
            List<int> ruidoY = new List<int>();

            int nuevoPunto, puntos;
            for (int x = 0; x <= mapa.GetUpperBound(0) + intervalo; x+=intervalo)
            {
                nuevoPunto = Mathf.FloorToInt(Mathf.PerlinNoise(x, semilla) * mapa.GetUpperBound(1));
                ruidoY.Add(nuevoPunto);
                ruidoX.Add(x);                                       
            }            
            puntos = ruidoY.Count;

            for (int i = 1; i < puntos; i++)
            {
                posicionActual = new Vector2Int(ruidoX[i], ruidoY[i]);
                posicionAnterior = new Vector2Int(ruidoX[i-1], ruidoY[i-1]);

                Vector2 diferencia = posicionActual - posicionAnterior;
                float cambioEnAltura = diferencia.y / intervalo;
                float alturaActual = posicionAnterior.y;

                for (int x = posicionAnterior.x; x < posicionActual.x && x <= mapa.GetUpperBound(0); x++)
                {
                    for (int y = Mathf.FloorToInt(alturaActual); y >= 0 ; y--)
                    {
                        mapa[x, y] = 1;
                    }
                    alturaActual += cambioEnAltura;
                }

            }
            return mapa;
        }
        else
        {
            return PerlinNoise(mapa, semilla);
        }     
    }

    public static int[,] RandomWalk(int[,] mapa, float semilla)
    {        
        Random.InitState(semilla.GetHashCode());

        int ultimaAltura = Random.Range(0, mapa.GetUpperBound(1));

        for (int x = 0; x <= mapa.GetUpperBound(0); x++)
        {
            //0 Sube, 1 Baja, 2 Igual
            int nextMove = Random.Range(0, 3);

            if (nextMove == 0 && ultimaAltura < mapa.GetUpperBound(1))
            {
                ultimaAltura++;
            }
            else if (nextMove == 1 && ultimaAltura > 0)
            {
                ultimaAltura--;
            }

            for (int y = ultimaAltura; y >=0; y--)
            {
                mapa[x, y] = 1;
            }
        }

        return mapa;
    }

    public static int[,] RandomWalkSuavizado(int[,] mapa, float semilla, int suavizado)
    {
        Random.InitState(semilla.GetHashCode());

        int ultimaAltura = Random.Range(0, mapa.GetUpperBound(1));
        int anchoContador = 0;

        for (int x = 0; x <= mapa.GetUpperBound(0); x++)
        {
            if (anchoContador >= suavizado)
            {
                //0 Sube, 1 Baja, 2 Igual
                int nextMove = Random.Range(0, 3);

                if (nextMove == 0 && ultimaAltura < mapa.GetUpperBound(1))
                {
                    ultimaAltura++;
                }
                else if (nextMove == 1 && ultimaAltura > 0)
                {
                    ultimaAltura--;
                }
                anchoContador = 0;
            }
            anchoContador++;
            for (int y = ultimaAltura; y >= 0; y--)
                {
                    mapa[x, y] = 1;
                }                                        
        }
        return mapa;
    }

    public static int[,] PerlinNoiseCuevas(int[,] mapa, float modificador, bool murosBordes, float semilla, float offsetX = 0f, float offsetY = 0f)
    {
        int nuevoPunto;

        for (int x = 0; x <= mapa.GetUpperBound(0); x++)
        {
            for (int y = 0; y <= mapa.GetUpperBound(1); y++)
            {
                if(murosBordes && (x == 0 || y == 0 || x == mapa.GetUpperBound(0) || y == mapa.GetUpperBound(1))){
                    mapa[x, y] = 1;
                }
                else
                {
                    nuevoPunto = Mathf.RoundToInt(Mathf.PerlinNoise(x * modificador + offsetX + semilla, y * modificador + offsetY + semilla));
                    mapa[x, y] = nuevoPunto;
                }
            }
        }

        return mapa;
    }

    public static int[,] RandomWalkCueva(int[,] mapa, float semilla, float porcentaje, bool bordesMuros, bool diagonalMove)
    {
        Random.InitState(semilla.GetHashCode());
        int valorMinimo = 0;
        int valorMaximoX = mapa.GetUpperBound(0);
        int valorMaximoY = mapa.GetUpperBound(1);
        int ancho = mapa.GetUpperBound(0) + 1;
        int alto = mapa.GetUpperBound(1) + 1;

        if (bordesMuros)
        {
            valorMinimo++;
            valorMaximoX--;
            valorMaximoY--;
            ancho -= 2;
            alto -= 2;
        }

        int posicionX = Random.Range(valorMinimo, valorMaximoX);
        int posicionY = Random.Range(valorMinimo, valorMaximoY);

        int maxTilesDelete = Mathf.FloorToInt(ancho * alto * porcentaje);
        int tilesDelete = 0;

        while (tilesDelete < maxTilesDelete)
        {
            if(mapa[posicionX, posicionY] == 1)
            {
                mapa[posicionX, posicionY] = 0;
                tilesDelete++;
            }

            if (diagonalMove)
            {
                int direcciónAleatoriaX = Random.Range(-1, 2);
                int direcciónAleatoriaY = Random.Range(-1, 2);

                posicionX += direcciónAleatoriaX;
                posicionY += direcciónAleatoriaY;
            }
            else
            {
                int direcciónAleatoria = Random.Range(0, 4);
                switch (direcciónAleatoria)
                {
                    case 0:
                        //Arriba
                        posicionY++;
                        break;
                    case 1:
                        //Abajo
                        posicionY--;
                        break;
                    case 2:
                        //Izquierda
                        posicionX--;
                        break;
                    case 3:
                        //Derecha
                        posicionX++;
                        break;
                }
            }
            posicionX = Mathf.Clamp(posicionX, valorMinimo, valorMaximoX);
            posicionY = Mathf.Clamp(posicionY, valorMinimo, valorMaximoY);
        }

        return mapa;
    }

    public static int[,] TunelDireccional(int[,] mapa, float semilla, int anchoMinimo, int anchoMaximo, float aspereza, int desplazamientoMaximo, float desplazamiento)
    {
        int anchoTunel = 1;
        int x = mapa.GetUpperBound(0) / 2;

        Random.InitState(semilla.GetHashCode());

        for (int y = 0; y <= mapa.GetUpperBound(1); y++)
        {
            for (int i = -anchoTunel; i <= anchoTunel; i++)
            {
                mapa[x + i, y] = 0;
            }

            if (Random.value < aspereza)
            {
                int cambioAncho = Random.Range(-anchoMaximo, anchoMaximo);
                anchoTunel += cambioAncho;

                anchoTunel = Mathf.Clamp(anchoTunel, anchoMinimo, anchoMaximo);
            }

            if (Random.value < desplazamiento)
            {
                int cambioEnX = Random.Range(-desplazamientoMaximo, desplazamientoMaximo);
                x += cambioEnX;

                x = Mathf.Clamp(x, anchoMaximo + 1, mapa.GetUpperBound(0)-anchoMaximo);
            }
        }

        return mapa;
    }
}

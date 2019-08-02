using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using System.IO;

public class Estado : MonoBehaviour
{
    public int Nivel;
    public int Vidas;
    public string[] inventario;
    public Color colorBando;
    public GameObject prefab;

    public Color setColor(float[] colorFloat)
    {
        Color newColor = new Color(colorFloat[0], colorFloat[1], colorFloat[2], colorFloat[3]);
        return newColor;
    }

    public float[] getColor()
    {
        float[] colorFloat = new float[4] { colorBando.r, colorBando.g, colorBando.b, colorBando.a };
        return colorFloat;
    }    

    [Serializable]
    public class Estado_Class
    {
        public int Nivel;
        public int Vidas;
        public string[] inventario;
        public float[] colorBando;
        public string prefab;

        public Estado_Class(int nivel, int vidas, string[] inventario, float[] colorBando, string prefab)
        {
            this.Nivel = nivel;
            this.Vidas = vidas;
            this.inventario = inventario;
            this.colorBando = colorBando;
            this.prefab = prefab;
        }
    }

    public void SetData(Estado_Class estado)
    {
        Nivel = estado.Nivel;
        Vidas = estado.Vidas;
        inventario = estado.inventario;
        colorBando = setColor(estado.colorBando);        
        string assetPath = "Assets/Scripts/" + estado.prefab + ".prefab";
        prefab = AssetDatabase.LoadAssetAtPath(assetPath, typeof(GameObject)) as GameObject;
    }
}
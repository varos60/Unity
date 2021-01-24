using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RandomColorClick : MonoBehaviour
{
    Material material;
    public Color randomColor;

    void Start()
    {
        material = GetComponent<Renderer>().material;        

    }

    void OnMouseDown()
    {
        randomColor = new Color(Random.Range(0f, 1f), Random.Range(0f, 1f), Random.Range(0f, 1f));
        material.SetColor("_Color", randomColor);
        Debug.Log("Color: " + randomColor);
    }
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Background : MonoBehaviour
{
    Scrolling scrolling;

    void Awake()
    {
        scrolling = GetComponent<Scrolling>();
    }

    void Update()
    {
        scrolling.Scrolling_object();
        scrolling.RepositionFloor();
    }

}

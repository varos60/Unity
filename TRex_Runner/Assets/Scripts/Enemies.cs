using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemies : MonoBehaviour
{
    Scrolling scrolling;

    void Awake()
    {
        scrolling = GetComponent<Scrolling>();
    }

    void Update()
    {
        scrolling.Scrolling_object();                
    }

    void OnTriggerExit2D(Collider2D collision)
    {        
        if (collision.CompareTag("OutScreen"))
        {
            scrolling.Destroy_Object();
        }        
    }
}

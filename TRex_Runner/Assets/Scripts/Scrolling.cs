using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scrolling : MonoBehaviour
{    
    SpriteRenderer spriteRenderer;
    float groundSize_X;

    void Awake()
    {
        spriteRenderer = GetComponent<SpriteRenderer>();
    }

    void Start()
    {
        groundSize_X = spriteRenderer.size.x;        
    }
    
    public void Scrolling_object()
    {
        if (GameController.run == true && GameController.die == false)
        {
            transform.position += Vector3.left * GameController.scrollSpeed * Time.deltaTime;
        }
    }

    public void RepositionFloor()
    {
        if (transform.position.x < -groundSize_X)
        {
            transform.Translate(Vector2.right * groundSize_X * 2);
        }
    }

    public void Destroy_Object()
    {                                
        Destroy(transform.gameObject);        
    }
}

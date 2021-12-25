using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MenuMoveBackgound : MonoBehaviour
{    
    public float speed;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        MoveBackground();
    }

    void MoveBackground()
    {
        transform.Translate(Vector2.left * speed * 0.0001f);
        if(transform.position.x <= -4.334f)
        {            
            ResetBackgroundPosition();
        }
    }

    void ResetBackgroundPosition()
    {
        transform.position = new Vector2(0.78f, 0);
    }
}

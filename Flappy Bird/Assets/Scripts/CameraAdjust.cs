using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraAdjust : MonoBehaviour
{
    public SpriteRenderer m_sprite;
    // Start is called before the first frame update
    void Start()
    {
        //float orthoSize = m_sprite.bounds.size.x * Screen.height / Screen.width * 0.5f; Para hacer el match en horizontal
        float orthoSize = m_sprite.bounds.size.y / 2; //Para hacer el match en horizontal
        Camera.main.orthographicSize = orthoSize;
    }

}
